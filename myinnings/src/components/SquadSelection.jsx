import React, { useState } from 'react';
import { Users, Clock, Send, Lock, CheckCircle2, XCircle, AlertCircle, Download, Share2, Star, User } from 'lucide-react';

const initialSquad = [
  { id: 1, name: 'Sohan Khatavkar', role: 'All-Rounder', status: 'available', selected: true, isCaptain: true },
  { id: 2, name: 'Aarav Patil', role: 'Batsman', status: 'available', selected: true, isCaptain: false },
  { id: 3, name: 'Rohan Sharma', role: 'Bowler', status: 'available', selected: true, isCaptain: false },
  { id: 4, name: 'Vikram Joshi', role: 'Wicketkeeper', status: 'available', selected: true, isCaptain: false },
  { id: 5, name: 'Aditya Kulkarni', role: 'Batsman', status: 'available', selected: true, isCaptain: false },
  { id: 6, name: 'Pranav Desai', role: 'All-Rounder', status: 'available', selected: true, isCaptain: false },
  { id: 7, name: 'Siddharth Nair', role: 'Bowler', status: 'available', selected: true, isCaptain: false },
  { id: 8, name: 'Kunal More', role: 'Bowler', status: 'available', selected: false, isCaptain: false },
  { id: 9, name: 'Rahul Mehta', role: 'Batsman', status: 'available', selected: true, isCaptain: false },
  { id: 10, name: 'Yash Gaikwad', role: 'All-Rounder', status: 'tentative', selected: false, isCaptain: false },
  { id: 11, name: 'Omkar Bhosale', role: 'Batsman', status: 'tentative', selected: false, isCaptain: false },
  { id: 12, name: 'Tejas Pawar', role: 'Bowler', status: 'tentative', selected: false, isCaptain: false },
  { id: 13, name: 'Nikhil Deshpande', role: 'Wicketkeeper', status: 'unavailable', selected: false, isCaptain: false },
  { id: 14, name: 'Arjun Wagh', role: 'All-Rounder', status: 'unavailable', selected: false, isCaptain: false },
  { id: 15, name: 'Sahil Phadke', role: 'Batsman', status: 'available', selected: true, isCaptain: false },
];

export default function SquadSelection() {
  const [squad, setSquad] = useState(initialSquad);

  const selectedCount = squad.filter(p => p.selected).length;
  const isExact = selectedCount === 12;
  const isOver = selectedCount > 12;

  const toggleSelection = (id) => {
    setSquad(squad.map(player => {
      if (player.id === id && player.status !== 'unavailable') {
        return { ...player, selected: !player.selected };
      }
      return player;
    }));
  };

  const getInitials = (name) => {
    const parts = name.split(' ');
    return parts.map(p => p[0]).join('').substring(0, 2);
  };

  const getRoleColors = (role) => {
    switch (role) {
      case 'Batsman': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Bowler': return 'bg-red-50 text-red-700 border-red-200';
      case 'All-Rounder': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Wicketkeeper': return 'bg-amber-50 text-amber-700 border-amber-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getRoleAvatarColors = (role) => {
    switch (role) {
      case 'Batsman': return 'bg-blue-600 text-white';
      case 'Bowler': return 'bg-red-600 text-white';
      case 'All-Rounder': return 'bg-purple-600 text-white';
      case 'Wicketkeeper': return 'bg-amber-600 text-white';
      default: return 'bg-slate-600 text-white';
    }
  };

  const getStatusIconAndColor = (status) => {
    switch (status) {
      case 'available': return { icon: <CheckCircle2 size={14} className="mr-1" />, classes: 'bg-emerald-100 text-emerald-700' };
      case 'unavailable': return { icon: <XCircle size={14} className="mr-1" />, classes: 'bg-rose-100 text-rose-700' };
      case 'tentative': return { icon: <AlertCircle size={14} className="mr-1" />, classes: 'bg-amber-100 text-amber-700' };
      default: return { icon: null, classes: 'bg-slate-100 text-slate-700' };
    }
  };

  return (
    <div className="w-full space-y-6 text-slate-900">
      
      {/* 1. Availability Barometer Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <Clock size={20} className="text-emerald-600 mr-2" />
            48H Availability Window
          </h2>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-600">10 of 14 squad members responded</span>
            <span className="text-emerald-700 font-medium">71%</span>
          </div>
          <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '71%' }}></div>
          </div>
          <p className="text-xs text-slate-500 mt-2">18 hours remaining</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center">
            <Send size={16} className="mr-2" />
            WhatsApp Ping (4 Pending)
          </button>
          <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center">
            <Lock size={16} className="mr-2" />
            Lock Playing 12
          </button>
        </div>
      </div>

      {/* 2. Interactive Player Roster */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <Users size={20} className="text-blue-600 mr-2" />
            Playing 12 Selection
          </h2>
          <div className={`px-3 py-1 rounded-full text-sm font-bold flex items-center border ${
            isExact ? 'bg-emerald-100 text-emerald-700 border-emerald-200' : 
            isOver ? 'bg-rose-100 text-rose-700 border-rose-200' : 
            'bg-slate-100 text-slate-600 border-slate-300'
          }`}>
            Selected: {selectedCount}/12
          </div>
        </div>

        <div className="space-y-3">
          {squad.map((player) => {
            const statusConfig = getStatusIconAndColor(player.status);
            const isUnavailable = player.status === 'unavailable';
            
            return (
              <div 
                key={player.id} 
                className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                  player.selected ? 'bg-emerald-50/50 border-emerald-200' : 'bg-white border-slate-200'
                } ${isUnavailable ? 'opacity-60 grayscale-[0.5]' : 'hover:border-emerald-300'}`}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-sm ${getRoleAvatarColors(player.role)}`}>
                    {getInitials(player.name)}
                  </div>
                  
                  <div className="ml-3 truncate pr-2">
                    <div className="flex items-center">
                      <span className="font-semibold text-slate-900 truncate">{player.name}</span>
                      {player.isCaptain && <Star size={14} className="text-amber-500 ml-1.5 fill-amber-500 shrink-0" />}
                    </div>
                    <div className="flex items-center mt-1 gap-2 flex-wrap">
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getRoleColors(player.role)}`}>
                        {player.role}
                      </span>
                      <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded flex items-center ${statusConfig.classes}`}>
                        {statusConfig.icon}
                        {player.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 ml-2">
                  <label className="relative flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={player.selected}
                      onChange={() => toggleSelection(player.id)}
                      disabled={isUnavailable}
                    />
                    <div className={`w-11 h-6 rounded-full peer peer-focus:ring-2 peer-focus:ring-emerald-500/50 transition-colors ${
                      player.selected ? 'bg-emerald-500' : 'bg-slate-300'
                    } ${isUnavailable ? 'cursor-not-allowed' : ''}`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border-slate-300 border rounded-full h-5 w-5 transition-transform ${
                        player.selected ? 'translate-x-full border-white' : ''
                      }`}></div>
                    </div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Match Poster Preview Card */}
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 border border-emerald-800 rounded-2xl p-6 shadow-lg relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white border-2 border-emerald-600 rounded-2xl flex items-center justify-center mb-3 shadow-md rotate-3">
            <User size={32} className="text-emerald-700" />
          </div>
          
          <h3 className="text-xl font-black text-white tracking-wide uppercase mb-1">Pune Strikers CC</h3>
          <p className="text-sm font-medium text-emerald-100 mb-6 bg-black/20 px-3 py-1 rounded-full">
            {selectedCount} Players Selected
          </p>
          
          <div className="flex flex-col sm:flex-row w-full gap-3 mt-2">
            <button className="flex-1 bg-white hover:bg-slate-50 text-emerald-900 py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center shadow-sm">
              <Download size={16} className="mr-2" />
              Download Poster
            </button>
            <button className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Share2 size={16} className="mr-2" />
              Share to WhatsApp
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
