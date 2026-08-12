import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public override render() {

    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0F0D0A] text-[#FBF9F4] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-[#16120E] border border-[#C59A55]/30 p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="w-16 h-16 bg-[#C59A55]/20 text-[#E6C994] border border-[#C59A55]/40 rounded-full flex items-center justify-center mx-auto text-2xl">
              ⚠️
            </div>
            <h1 className="text-2xl font-serif font-bold text-[#FBF9F4]">
              Chalé A-Frame Florianópolis
            </h1>
            <p className="text-sm text-zinc-400">
              Ocorreu um pequeno contratempo ao carregar a página. Clique abaixo para atualizar e continuar explorando a hospedagem.
            </p>
            {this.state.error && (
              <div className="text-xs text-rose-400/80 bg-black/40 p-3 rounded-xl text-left font-mono overflow-x-auto max-h-32">
                {this.state.error.message}
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#C59A55] to-[#B8860B] text-black font-bold text-sm rounded-xl shadow-md hover:brightness-110 transition-all cursor-pointer"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
