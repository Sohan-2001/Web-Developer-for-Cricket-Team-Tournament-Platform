import React, { useState } from 'react';
import { 
  IndianRupee, Calculator, AlertTriangle, CheckCircle2, CreditCard, 
  Wallet, ExternalLink, FileSpreadsheet, XCircle, RefreshCw, 
  Download, ArrowRight 
} from 'lucide-react';

export default function FinancialSettlement() {
  const [kittyMembers, setKittyMembers] = useState([
    { id: 1, name: 'Sohan Khatavkar', balance: 1500, deducted: false },
    { id: 2, name: 'Aarav Patil', balance: 1200, deducted: false },
    { id: 3, name: 'Rohan Sharma', balance: 900, deducted: false },
    { id: 4, name: 'Vikram Joshi', balance: 600, deducted: false },
    { id: 5, name: 'Aditya Kulkarni', balance: 250, deducted: false },
    { id: 6, name: 'Pranav Desai', balance: 1800, deducted: false },
  ]);

  const [payPerPlay, setPayPerPlay] = useState([
    { id: 7, name: 'Siddharth Nair', amount: 300, paid: false },
    { id: 8, name: 'Kunal More', amount: 300, paid: false },
    { id: 9, name: 'Rahul Mehta', amount: 300, paid: true },
    { id: 10, name: 'Sahil Phadke', amount: 300, paid: false },
    { id: 11, name: 'Yash Gaikwad', amount: 300, paid: false },
  ]);

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleDeduct = (id) => {
    setKittyMembers(members => members.map(member => {
      if (member.id === id) {
        if (member.balance >= 300 && !member.deducted) {
          return { ...member, balance: member.balance - 300, deducted: true };
        }
      }
      return member;
    }));
  };

  const togglePayment = (id) => {
    setPayPerPlay(members => members.map(member => 
      member.id === id ? { ...member, paid: !member.paid } : member
    ));
  };

  const generateUpiLink = (name) => {
    showToast(`UPI Link generated for ${name} and sent via WhatsApp`);
  };

  return (
    <div className="w-full text-slate-200 pb-28 space-y-6">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg shadow-xl z-50 flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
        {/* Expense Calculator Header Card */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg">
          <div className="bg-slate-700/50 p-4 border-b border-slate-700 flex items-center gap-3">
            <Calculator className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-bold text-white">Match Expense Calculator</h2>
          </div>
          
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
              <div className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl border border-slate-700/50">
                <span className="text-slate-400 text-sm md:text-base">Ground Fee</span>
                <span className="font-semibold text-white flex items-center"><IndianRupee className="w-3 h-3 md:w-4 md:h-4 mr-0.5" />1,600</span>
              </div>
              <div className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl border border-slate-700/50">
                <span className="text-slate-400 text-sm md:text-base">Umpire & Scorer</span>
                <span className="font-semibold text-white flex items-center"><IndianRupee className="w-3 h-3 md:w-4 md:h-4 mr-0.5" />800</span>
              </div>
              <div className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl border border-slate-700/50">
                <span className="text-slate-400 text-sm md:text-base">Match Balls (2x SG)</span>
                <span className="font-semibold text-white flex items-center"><IndianRupee className="w-3 h-3 md:w-4 md:h-4 mr-0.5" />400</span>
              </div>
              <div className="flex justify-between items-center bg-slate-700/30 p-3 rounded-xl border border-slate-700/50">
                <span className="text-slate-400 text-sm md:text-base">Refreshments</span>
                <span className="font-semibold text-white flex items-center"><IndianRupee className="w-3 h-3 md:w-4 md:h-4 mr-0.5" />500</span>
              </div>
            </div>

            <div className="h-px bg-slate-700 my-4 w-full"></div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-2">
              <div className="text-center md:text-left">
                <div className="text-sm text-slate-400 mb-1">Total Team Expense</div>
                <div className="text-3xl font-bold text-emerald-400 flex items-center justify-center md:justify-start">
                  <IndianRupee className="w-6 h-6 mr-1" />3,300
                </div>
              </div>
              
              <div className="bg-slate-700/50 px-6 py-4 rounded-xl border border-slate-600 w-full md:w-auto flex flex-col items-center">
                <div className="text-sm text-slate-300 mb-1">Participating Players: <span className="font-bold text-white">11</span></div>
                <div className="text-lg font-semibold text-amber-400 flex items-center">
                  Per-Head Cost: <IndianRupee className="w-4 h-4 ml-2 mr-0.5" />300
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section A: Monthly Kitty Members */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg">
          <div className="bg-slate-700/50 p-4 border-b border-slate-700 flex items-center gap-3">
            <Wallet className="w-6 h-6 text-sky-400" />
            <h2 className="text-xl font-bold text-white">Monthly Kitty Members</h2>
            <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200 ml-auto hidden md:inline-block">Advance Balance</span>
          </div>

          <div className="p-4 md:p-6 flex flex-col gap-4">
            {kittyMembers.map(member => {
              const isLowBalance = member.balance < 300;
              const initials = member.name.split(' ').map(n => n[0]).join('');
              
              return (
                <div key={member.id} className="flex flex-col sm:flex-row justify-between sm:items-center bg-slate-700/20 p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors gap-4 sm:gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white shrink-0">
                      {initials}
                    </div>
                    <div>
                      <div className="font-medium text-white">{member.name}</div>
                      <div className={`text-sm flex items-center gap-1 ${isLowBalance ? 'text-rose-400' : 'text-slate-400'}`}>
                        {isLowBalance && <AlertTriangle className="w-3 h-3" />}
                        Balance: ₹{member.balance}
                      </div>
                    </div>
                  </div>

                  <div>
                    {member.deducted ? (
                      <div className="flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 text-sm font-medium w-full sm:w-auto">
                        <CheckCircle2 className="w-4 h-4" />
                        Deducted • New Bal: ₹{member.balance}
                      </div>
                    ) : (
                      <button 
                        onClick={() => handleDeduct(member.id)}
                        disabled={isLowBalance}
                        className={`w-full sm:w-auto flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          isLowBalance 
                            ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 active:scale-95'
                        }`}
                      >
                        {isLowBalance ? 'Insufficient Balance' : 'Deduct ₹300'}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Section B: Pay-Per-Play Members */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-lg">
          <div className="bg-slate-700/50 p-4 border-b border-slate-700 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-fuchsia-400" />
            <h2 className="text-xl font-bold text-white">Pay-Per-Play Members</h2>
            <span className="text-xs bg-slate-600 px-2 py-1 rounded text-slate-200 ml-auto hidden md:inline-block">Direct Payment</span>
          </div>

          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {payPerPlay.map(member => {
              const initials = member.name.split(' ').map(n => n[0]).join('');
              
              return (
                <div key={member.id} className="bg-slate-700/20 p-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-white shrink-0">
                        {initials}
                      </div>
                      <div>
                        <div className="font-medium text-white">{member.name}</div>
                        <div className="text-sm text-slate-400">Due: ₹{member.amount}</div>
                      </div>
                    </div>
                    <div>
                      {member.paid ? (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                          <CheckCircle2 className="w-3 h-3" /> Paid via UPI
                        </span>
                      ) : (
                        <span className="inline-flex items-center text-xs font-medium px-2 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-2">
                    {!member.paid && (
                      <button 
                        onClick={() => generateUpiLink(member.name)}
                        className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> UPI Link
                      </button>
                    )}
                    <button 
                      onClick={() => togglePayment(member.id)}
                      className={`flex-1 text-xs py-2 px-3 rounded-lg flex items-center justify-center font-medium transition-colors ${
                        member.paid 
                          ? 'bg-slate-700 hover:bg-rose-900/40 text-slate-300 hover:text-rose-400 border border-slate-600 hover:border-rose-500/30' 
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      }`}
                    >
                      {member.paid ? 'Mark as Unpaid' : 'Mark as Received'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      {/* Action Bar (Sticky at Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-700 p-4 z-40">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3">
          <button 
            onClick={() => showToast('Synced successfully with Splitwise!')}
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <RefreshCw className="w-4 h-4" /> Sync to Splitwise
          </button>
          
          <button 
            onClick={() => showToast('Balance sheet exported as CSV.')}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <Download className="w-4 h-4" /> Export Balance Sheet
          </button>
          
          <button 
            onClick={() => showToast('Match cycle closed. Financials locked.')}
            className="flex-1 bg-rose-600 hover:bg-rose-500 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors active:scale-95"
          >
            <XCircle className="w-4 h-4" /> Close Match Cycle
          </button>
        </div>
      </div>
    </div>
  );
}
