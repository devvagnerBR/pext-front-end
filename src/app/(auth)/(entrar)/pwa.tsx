'use client'
import { useEffect, useState } from 'react';
interface PwaProps { }

export function Pwa( props: PwaProps ) {

  const [deferredPrompt, setDeferredPrompt] = useState<any | null>( null );
  const [showPrompt, setShowPrompt] = useState( false );

  useEffect( () => {
    const handleBeforeInstallPrompt = ( e: any ) => {
      e.preventDefault();
      setDeferredPrompt( e );
      setShowPrompt( true );
    };

    window.addEventListener( 'beforeinstallprompt', handleBeforeInstallPrompt );

    return () => {
      window.removeEventListener( 'beforeinstallprompt', handleBeforeInstallPrompt );
    };
  }, [] );

  const handleInstallClick = async () => {
    if ( deferredPrompt ) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log( `Instalação: ${outcome}` );
      setDeferredPrompt( null );
      setShowPrompt( false );
    }
  };

  if ( !showPrompt ) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-xl border z-50">
      <p>Deseja instalar o app?</p>
      <button onClick={handleInstallClick} className="mt-2 cursor-pointer px-4 py-2 bg-black text-white rounded">
        Instalar
      </button>
    </div>
  );
}
