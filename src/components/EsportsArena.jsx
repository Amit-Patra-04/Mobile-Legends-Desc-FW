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
    <section className="relative w-full py-28 bg-[#04060b] text-white overflow-hidden">
      {/* Monumental Watermark Typography */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-stroke-watermark font-serif text-[clamp(5rem,15vw,16rem)] tracking-[0.12em] opacity-40 select-none pointer-events-none whitespace-nowrap z-0">
        CHAMPIONS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f3d288] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#f3d288] font-semibold">
                [ 06 // ESPORTS CIRCUIT ] • GLOBAL CHAMPIONSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
              <span className="editorial-italic text-[#f3d288] font-normal mr-2">Competitive</span>
              <span className="font-serif uppercase font-bold tracking-tight">Esports Crucible</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#94a3b8] mt-2.5 max-w-xl leading-relaxed">
              From franchised regional MPL leagues to the prestigious M-World Championship, discover the highest echelon of competitive 5v5 mastery.
            </p>
          </div>

          <div className="font-mono text-[11px] text-[#94a3b8] flex items-center gap-2.5 bg-black/50 px-4 py-2.5 rounded-full border border-white/[0.08] backdrop-blur-xl">
            <Trophy className="w-3.5 h-3.5 text-[#f3d288]" />
            <span className="tracking-widest uppercase">CIRCUIT // GLOBAL PRESTIGE TELEMETRY</span>
          </div>
        </div>

        {/* Tournaments Grid with Corner Crosshairs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.title}
              className="p-7 rounded-3xl card-awwwards crosshairs-container border border-white/[0.08] flex flex-col justify-between space-y-6 group"
            >
              <div className="crosshair-tl" />
              <div className="crosshair-tr" />
              <div className="crosshair-bl" />
              <div className="crosshair-br" />

              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className="px-2.5 py-1 rounded-full text-[9px] font-mono font-medium tracking-widest uppercase border backdrop-blur-xl"
                    style={{
                      backgroundColor: `${t.badgeColor}15`,
                      color: t.badgeColor,
                      borderColor: `${t.badgeColor}40`,
                    }}
                  >
                    {t.status}
                  </span>
                  <span className="text-[10px] font-mono text-[#94a3b8]/70 tracking-wider">{t.dates}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#f3d288] transition-colors duration-300">
                  {t.title}
                </h3>
                <p className="text-xs text-[#94a3b8] font-mono mt-1 mb-4">
                  {t.subtitle}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/[0.06] text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-[#94a3b8]">CIRCUIT REGIONS:</span>
                    <span className="text-white font-medium">{t.region}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94a3b8]">PRIZE POOL:</span>
                    <span className="text-[#f3d288] font-bold">{t.prizePool}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#94a3b8]">CHAMPION:</span>
                    <span className="text-white truncate max-w-[160px]">{t.currentChampion}</span>
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
