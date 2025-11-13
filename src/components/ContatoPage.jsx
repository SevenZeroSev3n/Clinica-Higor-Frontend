import React, { useState, useEffect } from 'react';
import axios from 'axios';

// CRÍTICO: URL do seu backend deve ser 8080 localmente
const API_URL = import.meta.env.VITE_API_URL;

// Função utilitária para formatar a data atual e hora mínima
const getMinDateTime = () => {
  const now = new Date();
  
  // Data mínima: hoje (YYYY-MM-DD)
  const today = now.toISOString().split('T')[0];
  
  // Hora mínima: A hora atual + 10 minutos (para evitar horários que acabaram de passar)
  now.setMinutes(now.getMinutes() + 10);
  const minTime = now.toTimeString().split(' ')[0].substring(0, 5); // HH:MM

  return { today, minTime };
};

const ContatoPage = () => {
  const { today, minTime } = getMinDateTime();

  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    phone: '',
    email: '',
    'scheduling-date': today,
    'scheduling-time': minTime,
    address: '',
    message: '',
  });
  
  const [submissionStatus, setSubmissionStatus] = useState(''); // 'success', 'error', 'loading'
  const [clientError, setClientError] = useState(''); // Erros de validação do cliente

  // Força o valor inicial e o mínimo ao carregar
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      'scheduling-date': today,
      'scheduling-time': minTime,
    }));
  }, [today, minTime]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setClientError(''); // Limpa o erro ao digitar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('loading');
    setClientError('');

    // --- VALIDAÇÃO DE NOME E FORMATO BÁSICO (CLIENTE) ---
    if (formData.name.trim().length < 5 || !formData.name.includes(' ')) {
        setClientError('Por favor, insira o nome completo (nome e sobrenome).');
        setSubmissionStatus('');
        return;
    }
    
    // --- VALIDAÇÃO DE DATA E HORA NO FUTURO (CLIENTE) ---
    const preferredDateTime = new Date(`${formData['scheduling-date']}T${formData['scheduling-time']}:00`);
    const now = new Date();
    
    // Validação de segurança dupla contra envio de datas passadas
    if (preferredDateTime < now) {
        setClientError('Por favor, escolha uma data e hora que não tenham passado.');
        setSubmissionStatus('');
        return;
    }


    try {
      // Axios envia a requisição POST
      const response = await axios.post(API_URL, formData);

      console.log('Agendamento Enviado:', response.data);
      setSubmissionStatus('success');
      
      // Resetar formulário
      setFormData({
        name: '', birthdate: '', phone: '', email: '', 
        'scheduling-date': today, 'scheduling-time': minTime, address: '', message: ''
      });

    } catch (error) {
        setSubmissionStatus('error');
        // Se o erro vier do servidor, exibe a mensagem de erro do backend
        if (error.response && error.response.data && error.response.data.message) {
            setClientError(error.response.data.message);
        } else {
            setClientError('Erro de conexão com o servidor. Verifique o console ou ligue.');
        }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold mb-4 text-dark-text text-center">
        Fale Conosco
      </h1>
      <p className="text-lg text-medium-text mb-12 text-center">
        Preencha o formulário para agendar, tirar dúvidas ou solicitar informações.
      </p>

      {/* Exibição do Status de Envio e Erros */}
      {submissionStatus === 'loading' && (
        <div className="p-3 mb-4 text-center text-main-black bg-yellow-100 rounded-md">Enviando solicitação...</div>
      )}
      {submissionStatus === 'success' && (
        <div className="p-3 mb-4 text-center text-white bg-green-500 rounded-md">Agendamento enviado com sucesso! Entraremos em contato.</div>
      )}
      {(submissionStatus === 'error' || clientError) && (
        <div className="p-3 mb-4 text-center text-white bg-red-500 rounded-md">
            {clientError || "Erro ao enviar agendamento. Tente novamente ou ligue."}
        </div>
      )}
      
      {/* Formulário */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Campo Nome Completo */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-text">Nome Completo</label>
          <input 
            type="text" 
            id="name" 
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            required
            placeholder="Nome e Sobrenome"
          />
        </div>
        
        {/* Campo Data de Nascimento */}
        <div>
          <label htmlFor="birthdate" className="block text-sm font-medium text-dark-text">Data de Nascimento</label>
          <input
            type="date"
            id="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            min="1920-01-01" 
            max={today}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            required
          />
        </div>
        
        {/* Campo Telefone/WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark-text">Telefone/WhatsApp</label>
          <input 
            type="tel" 
            id="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            required
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>

        {/* Campo E-mail */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-text">E-mail</label>
          <input 
            type="email" 
            id="email" 
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            required
            placeholder="seuemail@exemplo.com"
          />
        </div>

        {/* Campos Data e Hora de Preferência para Agendamento (Lado a lado) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="scheduling-date" className="block text-sm font-medium text-dark-text">Data de Preferência</label>
            <input
              type="date"
              id="scheduling-date"
              value={formData['scheduling-date']}
              onChange={handleChange}
              min={today}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
              required
            />
          </div>
          <div>
            <label htmlFor="scheduling-time" className="block text-sm font-medium text-dark-text">Hora de Preferência</label>
            <input
              type="time"
              id="scheduling-time"
              value={formData['scheduling-time']}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
              required
            />
          </div>
        </div>
        
        {/* Campo Endereço (Mantido) */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-dark-text">Seu Endereço (Opcional)</label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            placeholder="Rua, número, cidade"
          />
        </div>

        {/* Campo Mensagem (Mantido) */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-text">Mensagem / Observações</label>
          <textarea 
            id="message" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-main-black"
            placeholder="Descreva o motivo da sua consulta."
          ></textarea>
        </div>
        
        {/* Botão de Envio (O botão será desabilitado durante o carregamento) */}
        <div className="pt-4">
            <button 
              type="submit" 
              disabled={submissionStatus === 'loading'}
              className={`w-full py-3 text-lg font-semibold rounded-md shadow-lg transition-colors 
                ${submissionStatus === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-main-black text-white hover:bg-dark-text'}`}
            >
              {submissionStatus === 'loading' ? 'Enviando...' : 'Enviar Solicitação de Contato'}
            </button>
        </div>
      </form>
      
      <div className="mt-8 text-center">
        <a href="/" className="text-medium-text hover:text-dark-text underline">
          &larr; Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default ContatoPage;