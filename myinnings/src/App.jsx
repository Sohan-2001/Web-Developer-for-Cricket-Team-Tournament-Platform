import React, { useState } from 'react';
import { Shield, Users, IndianRupee, Zap, ChevronRight } from 'lucide-react';
import MatchHub from './components/MatchHub';
import SquadSelection from './components/SquadSelection';
import FinancialSettlement from './components/FinancialSettlement';

const tabs = [
  { id: 'match', label: 'Match Info', shortLabel: 'Match', icon: Shield, phase: '1' },
  { id: 'squad', label: 'Squad & Poll', shortLabel: 'Squad', icon: Users, phase: '2' },
  { id: 'finance', label: 'Financial Settlement', shortLabel: 'Finance', icon: IndianRupee, phase: '3' },
];

function App() {
  const [activeTab, setActiveTab] = useState('match');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-slate-900 tracking-tight leading-tight">MyInnings</h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium -mt-0.5">Cricket Match OS</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-emerald-600">
              SK
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation — Workflow Stepper */}
      <nav className="sticky top-[60px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-2">
          <div className="flex">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 relative flex items-center justify-center gap-1.5 px-2 py-3.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-600'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {/* Step number badge */}
                  <span className={`hidden sm:flex w-5 h-5 rounded-full items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                    isActive
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    {tab.phase}
                  </span>
                  <Icon className={`w-4 h-4 sm:hidden shrink-0 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  
                  {/* Active indicator line */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-500 rounded-full" />
                  )}

                  {/* Connector chevron */}
                  {index < tabs.length - 1 && (
                    <ChevronRight className="absolute -right-1.5 w-3 h-3 text-slate-300 hidden sm:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Active Match Banner */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm text-slate-600">
              Active: <span className="text-slate-900 font-semibold">Pune Strikers CC vs RC Pune</span>
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-500 font-medium">Sun, 7 Sep</span>
        </div>
      </div>

      {/* Tab Content Area */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {activeTab === 'match' && <MatchHub />}
        {activeTab === 'squad' && <SquadSelection />}
        {activeTab === 'finance' && <FinancialSettlement />}
      </main>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-4 pb-8 text-center">
        <p className="text-xs text-slate-400">
          MyInnings v1.0 — Built for amateur cricket teams in Pune 🏏
        </p>
      </footer>
    </div>
  );
}

export default App;
