import React from 'react';
import { Trophy, Globe, Flame, Users, Calendar, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { audioManager } from '../utils/audio';

const TOURNAMENTS = [
  {
    title: 'M-World Championship',
    subtitle: 'The Pinnacle of Global MLBB Esports',
    region: 'GLOBAL',
    prizePool: '$1,000,000 USD',
    currentChampion: 'Falcons AP.Bren (M5 World Champions)',
    badgeColor: '#f59e0b',
    status: 'ROAD TO M6',
    dates: 'NOVEMBER — DECEMBER',
  },
  {
    title: 'MPL Professional League',
    subtitle: 'Premier Regional Franchised Leagues',
    region: 'ID • PH • MY • SG • KH • MENA',
    prizePool: '$300,000+ Per Region',
    currentChampion: 'Fnatic ONIC / Team Liquid PH',
    badgeColor: '#06b6d4',
    status: 'SEASON IN PROGRESS',
    dates: 'SPRING & FALL SPLITS',
  },
  {
    title: 'Mid Season Cup (MSC)',
    subtitle: 'Esports World Cup (EWC) Official Title',
    region: 'INTERNATIONAL',
    prizePool: '$3,000,000 USD',
    currentChampion: 'SRG (Selangor Red Giants)',
    badgeColor: '#ec4899',
    status: 'SUMMER SHOWDOWN',
    dates: 'ANNUAL SUMMER',
  },
];

export default function EsportsArena() {
  return (
    <section className="relative w-full py-24 bg-[#030509] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-amber-400" />
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-amber-400">
                COMPETITIVE EXCELLENCE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase text-white">
              THE ESPORTS CRUCIBLE
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2 max-w-xl">
              From franchised regional MPL circuits to the prestigious M-World Championship, witness the pinnacle of 5v5 competitive mastery.
            </p>
          </div>

          <div className="font-mono text-xs text-zinc-400 flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>GLOBAL CIRCUIT TELEMETRY</span>
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.title}
              className="p-6 rounded-3xl glass-panel border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase"
                    style={{
                      backgroundColor: `${t.badgeColor}22`,
                      color: t.badgeColor,
                      border: `1px solid ${t.badgeColor}66`,
                    }}
                  >
                    {t.status}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{t.dates}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {t.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1 mb-4">
                  {t.subtitle}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">CIRCUIT REGIONS:</span>
                    <span className="text-white font-bold">{t.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">PRIZE POOL:</span>
                    <span className="text-amber-400 font-bold">{t.prizePool}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">REIGNING CHAMPION:</span>
                    <span className="text-zinc-200 truncate max-w-[160px]">{t.currentChampion}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.mobilelegends.com/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => audioManager.playClick()}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-mono text-zinc-300 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>OFFICIAL TOURNAMENT CODEX</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Official Game Download Experience Banner */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-amber-500/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(234,179,8,0.15)] flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#070b14] via-[#090f1d] to-[#070b14]">
          <div className="space-y-3 max-w-xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest">
                OFFICIAL MOONTON PLATFORM CLIENT
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
              PLAY MOBILE LEGENDS: BANG BANG TODAY
            </h3>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Experience authentic 5v5 fair MOBA warfare on iOS, Android, and official PC emulators. 10-second matchmaking, 10-minute battle thrill.
            </p>
          </div>

          {/* Official Store Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
            <a
              href="https://play.google.com/store/apps/details?id=com.mobile.legends"
              target="_blank"
              rel="noreferrer"
              onClick={() => audioManager.playClick()}
              className="px-5 py-3 rounded-2xl bg-black/80 hover:bg-black border border-zinc-700 hover:border-amber-400 flex items-center gap-3 transition-all cursor-pointer shadow-lg"
            >
              <div className="text-xl">🤖</div>
              <div className="text-left">
                <div className="text-[9px] font-mono text-zinc-400 uppercase leading-none">GET IT ON</div>
                <div className="text-xs font-bold font-sans text-white">Google Play</div>
              </div>
            </a>

            <a
              href="https://apps.apple.com/app/mobile-legends-bang-bang/id1160056295"
              target="_blank"
              rel="noreferrer"
              onClick={() => audioManager.playClick()}
              className="px-5 py-3 rounded-2xl bg-black/80 hover:bg-black border border-zinc-700 hover:border-cyan-400 flex items-center gap-3 transition-all cursor-pointer shadow-lg"
            >
              <div className="text-xl">🍏</div>
              <div className="text-left">
                <div className="text-[9px] font-mono text-zinc-400 uppercase leading-none">DOWNLOAD ON</div>
                <div className="text-xs font-bold font-sans text-white">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
