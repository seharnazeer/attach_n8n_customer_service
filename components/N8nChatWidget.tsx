import React, { useEffect, useRef } from 'react';
import { createChat } from '@n8n/chat';

const N8nChatWidget: React.FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    
    // ==========================================
    // CONFIGURATION: PASTE YOUR N8N WEBHOOK URL HERE
    // ==========================================
    const webhookUrl = 'https://n8n.srv1165683.hstgr.cloud/webhook/dabf8954-4a3e-4b99-adda-d553de46287b/chat';
    // ==========================================

    // Auth credentials (if required by your n8n workflow settings)
    const authToken = btoa('nexus:nexus');

    try {
      createChat({
        webhookUrl: webhookUrl,
        target: '#n8n-chat-container',
        mode: 'window',
        showWelcomeScreen: true,
        webhookConfig: {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${authToken}`
          }
        },
        i18n: {
          en: {
            title: 'Nexus Core AI',
            subtitle: 'Online • Enterprise Intelligence',
            footer: 'Secure Session • Powered by Nexus',
            getStarted: 'Initialize Connection',
            inputPlaceholder: 'Command input...',
          },
        },
        initialMessages: [
          '**System Initialized.** Welcome to the Nexus Core. ⚡',
          'I am your automated logic engine. How can I facilitate your workflow today?',
          'You can ask me to search data, trigger automations, or analyze inputs.'
        ],
        style: {
          primaryColor: '#0ea5e9',
          secondaryColor: '#1e293b',
          backgroundColor: '#0f172a',
          fontFamily: "'Inter', sans-serif",
          textColor: '#f8fafc',
          width: '420px',
          height: '650px',
          buttonColor: '#0ea5e9',
          chatWindow: {
            showTimestamp: true,
            borderRadius: '24px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(14, 165, 233, 0.1)',
          }
        }
      });
      initialized.current = true;
    } catch (error) {
      console.error('Error initializing n8n chat:', error);
    }
  }, []);

  return <div id="n8n-chat-container"></div>;
};

export default N8nChatWidget;