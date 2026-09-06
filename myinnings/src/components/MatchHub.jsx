import React from 'react';
import { Calendar, Clock, MapPin, Trophy, ExternalLink, IndianRupee, Shield, CheckCircle2, Users } from 'lucide-react';

export default function MatchHub() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Active Fixture Card */}
      <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 sm:p-6 border-b border-slate-700">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Pune Strikers CC vs Royal Challengers Pune</h2>
              <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Slot Secured & Opponent Confirmed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Date & Time</p>
              <p className="font-medium text-slate-200">Sunday, 7 Sep 2026</p>
              <p className="text-sm text-slate-300">7:00 AM - 9:00 AM</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Ground</p>
              <p className="font-medium text-slate-200">Shinde Sports Arena</p>
              <p className="text-sm text-slate-300">Pitch 2</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Trophy className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Format</p>
              <p className="font-medium text-slate-200">20 Overs</p>
              <p className="text-sm text-slate-300">Leather Ball</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-slate-400">Match Type</p>
              <p className="font-medium text-slate-200">Friendly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ground Financial Snapshot Card */}
      <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-700 p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-emerald-500/10 p-2 rounded-lg">
            <IndianRupee className="w-6 h-6 text-emerald-500" />
          </div>
          <h3 className="text-lg font-semibold text-white">Ground Financial Snapshot</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <p className="text-sm text-slate-400 mb-1">Total Slot Cost</p>
            <p className="text-xl font-bold text-white">₹3,200</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <p className="text-sm text-slate-400 mb-1">Opponent 50% Advance</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-white">₹1,600</p>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full font-medium">Paid via UPI</span>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
            <p className="text-sm text-slate-400 mb-1">Team Share</p>
            <p className="text-xl font-bold text-white">₹1,600</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Advance received from RC Pune captain - Amit Deshmukh
          </p>
        </div>
      </div>

      {/* CricHeroes Integration Card */}
      <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-700 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500/10 p-2 rounded-lg">
              <ExternalLink className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">CricHeroes Fixture Linked</h3>
              <p className="text-sm text-slate-400">Match ID: #CH-88219</p>
            </div>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 transition-colors">
            View on CricHeroes
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="text-blue-400 text-sm flex items-center justify-center sm:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Live scoring will be available on CricHeroes during the match
          </p>
        </div>
      </div>
    </div>
  );
}
