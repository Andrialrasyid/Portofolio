import React, { useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Activity,
  Zap,
  Wrench,
  Package,
  Radio,
  Network
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Work({ onSelectProject }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'grid'
  const projects = portfolioData.projects;

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];

  // Render individual realistic project screen mockup
  const renderCardMockup = (project, isCenter) => {
    switch (project.id) {
      case 'oee-monitoring':
        return (
          <div className="w-full h-full bg-[#091524] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-bold text-cyan-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">OEE Telemetry Monitoring</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                LIVE OEE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">AVAILABILITY</div>
                <div className="text-sm font-bold font-display text-cyan-400 mt-0.5">92.4%</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">PERFORMANCE</div>
                <div className="text-sm font-bold font-display text-emerald-400 mt-0.5">96.8%</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">QUALITY</div>
                <div className="text-sm font-bold font-display text-blue-400 mt-0.5">99.2%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>PLC Cycle Telemetry</span>
              <span className="text-cyan-400 font-bold">Plant OEE: 89.4%</span>
            </div>
          </div>
        );

      case 'energy-monitoring':
        return (
          <div className="w-full h-full bg-[#0a1a1c] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs font-bold text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Plant Energy Monitoring</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Modbus TCP
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono">Real-time Load: 418.5 kW</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">Normal Range</span>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-mono">Peak Tariff Shaving Alert</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400">Automated</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>ASP.NET Core &bull; SQL Server</span>
              <span className="text-emerald-400">ESG Carbon Audit</span>
            </div>
          </div>
        );

      case 'maintenance-management':
        return (
          <div className="w-full h-full bg-[#12162a] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-xs font-bold text-blue-400">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Maintenance Management (CMMS)</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-400 border border-blue-500/30">
                CMMS Portal
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">MTBF Average</div>
                <div className="text-base font-bold font-display text-blue-400 mt-0.5">340 Hours</div>
                <div className="text-[9px] text-slate-400 mt-1">Mean Time Between Failures</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">MTTR Repair</div>
                <div className="text-base font-bold font-display text-emerald-400 mt-0.5">38 Mins</div>
                <div className="text-[9px] text-slate-400 mt-1">Mean Time To Repair</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>QR Code Asset Tracking</span>
              <span className="text-blue-400">Preventative Schedule</span>
            </div>
          </div>
        );

      case 'wms':
        return (
          <div className="w-full h-full bg-[#1c180d] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-xs font-bold text-amber-400">
                  <Package className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Warehouse Management System</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                WMS Live
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">ACCURACY</div>
                <div className="text-sm font-bold font-display text-amber-400 mt-0.5">99.4%</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">FIFO RULE</div>
                <div className="text-sm font-bold font-display text-emerald-400 mt-0.5">Enforced</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">BARCODE</div>
                <div className="text-sm font-bold font-display text-cyan-400 mt-0.5">Instant</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>Zebra Scanner Integration</span>
              <span className="text-amber-400">Bin Location Indexed</span>
            </div>
          </div>
        );

      case 'iot-machine-condition':
        return (
          <div className="w-full h-full bg-[#1c0e14] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-xs font-bold text-rose-400">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Machine Condition IoT</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-rose-500/20 text-rose-400 border border-rose-500/30">
                Elfin EW11 Wi-Fi
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">Surface Temperature</div>
                <div className="text-base font-bold font-display text-rose-400 mt-0.5">58.4 °C</div>
                <div className="text-[9px] text-emerald-400 mt-1">&lt; Normal (QM30VT2)</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">Vibration Spectrum</div>
                <div className="text-base font-bold font-display text-cyan-400 mt-0.5">2.4 mm/s</div>
                <div className="text-[9px] text-slate-400 mt-1">Dual-Axis Velocity RMS</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>Banner QM30VT2 &bull; Elfin EW11</span>
              <span className="text-rose-400">Local Wi-Fi Modbus TCP</span>
            </div>
          </div>
        );

      case 'community-lan-wlan':
        return (
          <div className="w-full h-full bg-[#151026] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-400/40 flex items-center justify-center text-xs font-bold text-violet-400">
                  <Network className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Community LAN/WLAN (RT/RW Net)</div>
                  <div className="text-[9px] font-mono text-slate-400">MikroTik RouterOS Architecture</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-violet-500/20 text-violet-400 border border-violet-500/30">
                MTCNA Standard
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">BANDWIDTH</div>
                <div className="text-sm font-bold font-display text-violet-400 mt-0.5">QoS Tree</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">VLANs</div>
                <div className="text-sm font-bold font-display text-cyan-400 mt-0.5">Isolated</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">HOTSPOT</div>
                <div className="text-sm font-bold font-display text-emerald-400 mt-0.5">Radius</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>PPPoE Server &bull; UniFi Mesh</span>
              <span className="text-violet-400">Low-Jitter Routing</span>
            </div>
          </div>
        );

      case 'student-attendance':
        return (
          <div className="w-full h-full bg-[#0d1627] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-xs font-bold text-blue-400">
                  ID
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Campus Monitoring Portal</div>
                  <div className="text-[9px] font-mono text-slate-400">Biometric & RFID Sync</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                LIVE SYNC
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">Verification Speed</div>
                <div className="text-base font-bold font-display text-cyan-400 mt-0.5">&lt; 400ms</div>
                <div className="text-[9px] text-slate-400 mt-1">ZKTeco Hardware SDK</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-3">
                <div className="text-[9px] font-mono text-slate-400 uppercase">Check-In Queue</div>
                <div className="text-base font-bold font-display text-emerald-400 mt-0.5">-70% Latency</div>
                <div className="text-[9px] text-slate-400 mt-1">Direct Cloud Sync</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>Hardware: Fingerprint Sensor</span>
              <span className="text-cyan-400">Socket.IO Verified</span>
            </div>
          </div>
        );

      case 'cita-cita-aditama':
        return (
          <div className="w-full h-full bg-[#0f171c] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-xs font-bold text-emerald-400">
                  HR
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Enterprise HRIS & Payroll</div>
                  <div className="text-[9px] font-mono text-slate-400">PT Cita Cita Aditama</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ASP.NET Core
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono">Automated PPh 21 Tax Matrix</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">0% Errors</span>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-mono">Batch Payslip & Banking Export</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400">Processed</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>DB: Microsoft SQL Server</span>
              <span className="text-emerald-400">Entity Framework</span>
            </div>
          </div>
        );

      case 'ahm-mrp':
        return (
          <div className="w-full h-full bg-[#1c140d] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-xs font-bold text-amber-400">
                  MRP
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Part Import Logistics</div>
                  <div className="text-[9px] font-mono text-slate-400">Astra Honda Motor</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Spring Boot
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">IMPORT SKUs</div>
                <div className="text-sm font-bold font-display text-amber-400 mt-0.5">10,000+</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">STOCKOUT</div>
                <div className="text-sm font-bold font-display text-emerald-400 mt-0.5">0 Risk</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">AUDIT TRAIL</div>
                <div className="text-sm font-bold font-display text-cyan-400 mt-0.5">100%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>Oracle Database &bull; Node.js</span>
              <span className="text-amber-400">Procurement Ready</span>
            </div>
          </div>
        );

      case 'asri-app':
        return (
          <div className="w-full h-full bg-[#11111d] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-xs font-bold text-purple-400">
                  LIB
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Asri Digital Library</div>
                  <div className="text-[9px] font-mono text-slate-400">Cross-Platform App</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-purple-500/20 text-purple-400 border border-purple-500/30">
                React Native
              </span>
            </div>

            <div className="space-y-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-[11px] font-mono">Offline Reading & Sync</span>
                </div>
                <span className="text-[10px] font-mono text-purple-300">Active</span>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-mono">Push Notification Reminders</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300">Automated</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>Mobile &bull; Expo</span>
              <span className="text-purple-400">Rating: 4.8 / 5.0</span>
            </div>
          </div>
        );

      default:
        // astra-otoparts (Internship Project)
        return (
          <div className="w-full h-full bg-[#0a1526] text-white p-4 sm:p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-bold text-cyan-400">
                  AO
                </div>
                <div>
                  <div className="text-[11px] font-bold font-sans tracking-wide">Human Resource Information System (HRIS)</div>
                  <div className="text-[9px] font-mono text-slate-400">Internship at PT Velasto Indonesia (Astra Otoparts)</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Enterprise
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">OEE RATIO</div>
                <div className="text-sm font-bold font-display text-cyan-400 mt-0.5">89.4%</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">ENERGY AUDIT</div>
                <div className="text-sm font-bold font-display text-emerald-400 mt-0.5">Real-time</div>
              </div>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2 text-center">
                <div className="text-[8px] font-mono text-slate-400">UPTIME</div>
                <div className="text-sm font-bold font-display text-blue-400 mt-0.5">99.8%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
              <span>C# ASP.NET Core &bull; SQL Server</span>
              <span className="text-cyan-400">RBAC Secured</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden bg-[#0c0d12]">

      {/* 1. VISIBLE GEOMETRIC & CURVED LINE ARTWORK IN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Layer 1: Elegant Cyber / Topographic Vector Line Waves */}
        <svg className="w-full h-full min-w-[1200px] opacity-75" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wave 1: Flowing bright white line */}
          <path d="M-100 240C220 120 480 380 780 220C1080 80 1320 340 1600 210" stroke="rgba(255,255,255,0.22)" strokeWidth="1.8" />

          {/* Wave 2: Cyan accent glowing line */}
          <path d="M-100 320C260 180 520 440 860 280C1200 130 1380 400 1650 270" stroke="rgba(6,182,212,0.32)" strokeWidth="1.5" />

          {/* Wave 3: Lower harmonic line */}
          <path d="M-100 420C300 280 580 520 920 380C1260 230 1440 480 1680 360" stroke="rgba(255,255,255,0.16)" strokeWidth="1.4" strokeDasharray="6 4" />

          {/* Wave 4: Deep ambient wave */}
          <path d="M-100 500C340 360 640 590 1000 440C1320 310 1480 540 1720 420" stroke="rgba(59,130,246,0.25)" strokeWidth="1.6" />

          {/* Subtle horizontal guideline tracks with dot markers */}
          <line x1="0" y1="160" x2="1440" y2="160" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="580" x2="1440" y2="580" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 8" />

          {/* Small decorative cross/plus marks on line intersections */}
          <circle cx="280" cy="160" r="3" fill="rgba(6,182,212,0.6)" />
          <circle cx="780" cy="220" r="3.5" fill="rgba(255,255,255,0.8)" />
          <circle cx="1180" cy="160" r="3" fill="rgba(6,182,212,0.6)" />
        </svg>

        {/* Ambient radial glow behind the center active card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-cyan-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold block mb-2">
              SELECTED WORK &bull; {projects.length} PROJECTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Work Gallery
            </h2>
            <p className="mt-3 text-slate-400 font-sans text-xs sm:text-sm max-w-xl leading-relaxed">
              A collection of systems, digital projects, and technical work I've built.
            </p>
          </div>

          {/* Right Action: Toggle View or View More */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode(viewMode === 'gallery' ? 'grid' : 'gallery')}
              id="work-view-mode-toggle"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans text-xs font-semibold text-slate-900 bg-white hover:bg-slate-200 transition-all duration-200 shadow-md hover:shadow-lg shadow-white/10"
              title="Toggle all projects view"
            >
              <span>{viewMode === 'gallery' ? `View All (${projects.length}) Projects` : 'Back to Gallery'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* MODE 1: Interactive 3D Coverflow / Horizontal Card Stack (Matching Reference Screenshot) */}
        {viewMode === 'gallery' ? (
          <div>
            {/* The Horizontal Coverflow Card Stage */}
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[380px] flex items-center justify-center overflow-hidden mb-10 select-none">

              {/* Previous / Next Arrow Controls */}
              <button
                onClick={prevProject}
                aria-label="Previous project"
                className="absolute left-2 sm:left-6 z-40 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextProject}
                aria-label="Next project"
                className="absolute right-2 sm:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-2xl"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Cards Loop with 3D Positioning */}
              <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                {projects.map((proj, idx) => {
                  const total = projects.length;
                  let diff = idx - activeIndex;
                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  const isCenter = diff === 0;
                  const isVisible = Math.abs(diff) <= 2;

                  if (!isVisible) return null;

                  // Compute translation and scale based on position
                  let translateX = diff * 220; // px
                  if (typeof window !== 'undefined') {
                    if (window.innerWidth < 420) {
                      translateX = diff * 90;
                    } else if (window.innerWidth < 640) {
                      translateX = diff * 130;
                    }
                  }
                  const scale = isCenter ? 1 : 0.82 - Math.abs(diff) * 0.08;
                  const opacity = isCenter ? 1 : Math.max(0.2, 0.65 - Math.abs(diff) * 0.25);
                  const zIndex = 30 - Math.abs(diff) * 10;

                  return (
                    <div
                      key={proj.id}
                      onClick={() => {
                        if (isCenter) {
                          onSelectProject(proj);
                        } else {
                          setActiveIndex(idx);
                        }
                      }}
                      style={{
                        transform: `translateX(${translateX}px) scale(${scale})`,
                        zIndex: zIndex,
                        opacity: opacity,
                      }}
                      className={`work-coverflow-card absolute w-[86vw] max-w-[300px] xs:max-w-[340px] sm:max-w-none sm:w-[440px] md:w-[480px] h-[190px] sm:h-[280px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out border ${isCenter
                        ? 'border-blue-500/70 shadow-2xl shadow-blue-500/30 ring-1 ring-blue-400/50'
                        : 'border-white/10 shadow-lg shadow-black/80 hover:border-white/30'
                        }`}
                    >
                      {renderCardMockup(proj, isCenter)}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Pagination Dots (Supports all 11 projects with quick click jump) */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-8 flex-wrap max-w-md mx-auto">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i
                    ? 'w-7 sm:w-8 bg-cyan-400'
                    : 'w-1.5 sm:w-2 bg-white/20 hover:bg-white/40'
                    }`}
                />
              ))}
            </div>

            {/* Active Project Title & Description Below (Exact Layout as in Reference Screenshot) */}
            <div className="text-center max-w-3xl mx-auto px-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                  {activeProject.client}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {activeIndex + 1} of {projects.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white mb-3 tracking-tight">
                {activeProject.title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base font-sans leading-relaxed mb-5 max-w-2xl mx-auto">
                {activeProject.summary}
              </p>

              {/* View Project Action Link */}
              <button
                onClick={() => onSelectProject(activeProject)}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-white hover:text-cyan-400 border-b border-white/30 hover:border-cyan-400 pb-1 transition-colors group"
              >
                <span>View Project</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        ) : (
          /* MODE 2: Comprehensive Grid View displaying all 11 projects */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="work-project-card group cursor-pointer rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
              >
                <div className="work-mockup-frame w-full h-44 rounded-xl overflow-hidden mb-4 border border-white/10">
                  {renderCardMockup(proj, false)}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="work-card-client text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 uppercase text-slate-300">
                      {proj.client}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="work-card-title font-display font-bold text-white text-base mb-1 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="work-card-summary text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {proj.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
