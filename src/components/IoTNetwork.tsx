import React from 'react';
import { motion } from 'framer-motion';

export const IoTNetwork: React.FC = () => {
  return (
    <div className="relative w-full h-full select-none pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 360 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Neon Cyan Cloud Glow */}
          <filter id="iotCloudGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <linearGradient id="cloudFillGrad" x1="160" y1="5" x2="265" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1D667B" stopOpacity="0.90" />
            <stop offset="100%" stopColor="#0D2C3E" stopOpacity="0.94" />
          </linearGradient>

          <linearGradient id="cloudStrokeGrad" x1="165" y1="8" x2="265" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#72F5FF" />
            <stop offset="50%" stopColor="#26D7F4" />
            <stop offset="100%" stopColor="#18A8CE" />
          </linearGradient>

          {/* Wireless Signal Gradients */}
          <linearGradient id="orangeWaveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF5A36" />
            <stop offset="100%" stopColor="#FFA838" />
          </linearGradient>

          <linearGradient id="cyanWaveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5CF2FF" />
            <stop offset="100%" stopColor="#14B8DC" />
          </linearGradient>

          {/* Calorimeter Dial Gradients */}
          <linearGradient id="meterRimGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C4CAD2" />
            <stop offset="50%" stopColor="#767E88" />
            <stop offset="100%" stopColor="#3B414A" />
          </linearGradient>

          <radialGradient id="meterFaceGrad" cx="45%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#FAFCFF" />
            <stop offset="72%" stopColor="#DFE5EC" />
            <stop offset="100%" stopColor="#B4BDC8" />
          </radialGradient>

          <linearGradient id="squareHousingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6D747E" />
            <stop offset="50%" stopColor="#464C56" />
            <stop offset="100%" stopColor="#2D323A" />
          </linearGradient>

          {/* Radiator Thermal Gradient (Warm Orange Left -> Dark Slate Center -> Cool Cyan Right) */}
          <linearGradient id="radiatorThermalGrad" x1="0%" y1="15%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#E26D42" />
            <stop offset="26%" stopColor="#855852" />
            <stop offset="55%" stopColor="#4E5E6D" />
            <stop offset="82%" stopColor="#42869C" />
            <stop offset="100%" stopColor="#3CC4DC" />
          </linearGradient>

          <linearGradient id="radiatorBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9666" />
            <stop offset="48%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#56E4F7" />
          </linearGradient>
        </defs>

        {/* Ambient Subtle Backlights behind devices */}
        <circle cx="172" cy="145" r="46" fill="#FF6E38" fillOpacity="0.12" />
        <circle cx="285" cy="185" r="50" fill="#18D4F0" fillOpacity="0.14" />

        {/* Dashed Connection Arcs from IoT Cloud to the 3 Signal Wave Groups */}
        <path
          d="M168 58 C 132 68, 96 88, 70 115"
          stroke="#C87D55"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          strokeLinecap="round"
          opacity="0.88"
        />
        <path
          d="M198 74 C 190 88, 182 100, 177 112"
          stroke="#7298AA"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          strokeLinecap="round"
          opacity="0.88"
        />
        <path
          d="M242 72 C 254 84, 266 96, 274 108"
          stroke="#48B8CE"
          strokeWidth="1.6"
          strokeDasharray="4 4"
          strokeLinecap="round"
          opacity="0.88"
        />

        {/* Neon IoT Cloud Component (Top Right-Center) */}
        <g filter="url(#iotCloudGlow)">
          {/* Outer Cloud Shape */}
          <path
            d="M184 70H246C257.5 70 266.5 61.2 266.5 50.2C266.5 40.4 259.2 32.2 249.6 30.8C247.2 17.6 235.6 7.5 221.5 7.5C209.2 7.5 198.6 15.2 194.6 26.2C182.2 26.8 172.5 36.8 172.5 49.0C172.5 60.6 177.2 70 184 70Z"
            fill="url(#cloudFillGrad)"
            stroke="url(#cloudStrokeGrad)"
            strokeWidth="2.6"
          />
          {/* Inner Double-Border Cloud Contour */}
          <path
            d="M187 65.5H244C253.2 65.5 261 58.2 261 49.5C261 41.4 254.8 34.8 246.5 33.8C244.4 22.5 234.4 13.5 221.8 13.5C211.0 13.5 201.8 20.2 198.2 29.8C187.8 30.4 179.5 38.8 179.5 49.0C179.5 58.2 183.0 65.5 187 65.5Z"
            stroke="#5CEBFF"
            strokeWidth="1"
            strokeOpacity="0.55"
          />
          {/* IoT Label */}
          <text
            x="219"
            y="50"
            textAnchor="middle"
            fill="#84F5FF"
            fontSize="20.5"
            fontWeight="800"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.02em"
          >
            IoT
          </text>
        </g>

        {/* 1. LEFT SIGNAL WAVE (Orange) */}
        <motion.g
          animate={{ opacity: [0.86, 1, 0.86] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="62" cy="154" r="3.6" fill="#FF9838" />
          <path
            d="M51 145 C 57 139, 67 139, 73 145"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M43 136 C 53 126, 71 126, 81 136"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M35 127 C 49 113, 75 113, 89 127"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>

        {/* 2. CENTER SIGNAL WAVE (Large Orange) */}
        <motion.g
          animate={{ opacity: [0.88, 1, 0.88] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        >
          <circle cx="171" cy="162" r="4.5" fill="#FFA238" />
          <path
            d="M157 151 C 165 143, 177 143, 185 151"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <path
            d="M146 140 C 160 127, 182 127, 196 140"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4.6"
            strokeLinecap="round"
          />
          <path
            d="M135 129 C 155 111, 187 111, 207 129"
            stroke="url(#orangeWaveGrad)"
            strokeWidth="4.6"
            strokeLinecap="round"
          />
        </motion.g>

        {/* 3. RIGHT SIGNAL WAVE (Cyan) */}
        <motion.g
          animate={{ opacity: [0.86, 1, 0.86] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        >
          <circle cx="282" cy="144" r="3.6" fill="#3BE8FA" />
          <path
            d="M271 135 C 277 129, 287 129, 293 135"
            stroke="url(#cyanWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M263 126 C 273 116, 291 116, 301 126"
            stroke="url(#cyanWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M255 117 C 269 103, 295 103, 309 117"
            stroke="url(#cyanWaveGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </motion.g>

        {/* ============================================================
            DEVICE 1 (LEFT): Ultrasonic Pipe Calorimeter (Hat Kalorimetresi)
           ============================================================ */}
        <g transform="translate(22, 168)">
          {/* Horizontal Pipe Couplings */}
          <rect x="0" y="25" width="16" height="14" rx="2" fill="#7D8590" />
          <rect x="3" y="22" width="4" height="20" rx="1" fill="#9BA3AE" />
          <rect x="64" y="25" width="16" height="14" rx="2" fill="#7D8590" />
          <rect x="73" y="22" width="4" height="20" rx="1" fill="#9BA3AE" />

          {/* Outer 3D Circular Meter Body */}
          <circle cx="40" cy="32" r="28" fill="url(#meterRimGrad)" stroke="#B0B7C0" strokeWidth="1.2" />
          <circle cx="40" cy="31" r="23.5" fill="url(#meterFaceGrad)" stroke="#636B75" strokeWidth="1" />

          {/* Digital LCD Readout Screen */}
          <rect x="24" y="18" width="32" height="10.5" rx="2" fill="#5B6470" stroke="#424952" strokeWidth="1" />
          <text
            x="40"
            y="26"
            textAnchor="middle"
            fill="#D8E2EC"
            fontSize="6.8"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="0.06em"
          >
            00142
          </text>

          {/* Red Optical Button & Details */}
          <circle cx="52" cy="36.5" r="3.6" fill="#D9483B" />
          <line x1="32" y1="38" x2="43" y2="38" stroke="#8C95A2" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* ============================================================
            DEVICE 2 (CENTER): Square-Framed Digital Heat Cost Allocator
           ============================================================ */}
        <g transform="translate(131, 178)">
          {/* Outer Rounded Square Metallic Housing */}
          <rect
            x="0"
            y="0"
            width="78"
            height="68"
            rx="11"
            fill="url(#squareHousingGrad)"
            stroke="#8B929C"
            strokeWidth="1.5"
          />
          <rect
            x="3.5"
            y="3.5"
            width="71"
            height="61"
            rx="8"
            fill="none"
            stroke="#2B3038"
            strokeWidth="1"
          />

          {/* Inner Circular Meter Dial */}
          <circle cx="39" cy="34" r="27.5" fill="url(#meterRimGrad)" stroke="#9BA3AE" strokeWidth="1" />
          <circle cx="39" cy="33.5" r="23.8" fill="url(#meterFaceGrad)" />

          {/* Digital LCD Screen */}
          <rect x="21" y="20" width="36" height="11.5" rx="2" fill="#555E6A" stroke="#3D444E" strokeWidth="1" />
          <text
            x="39"
            y="28.2"
            textAnchor="middle"
            fill="#E2E8F0"
            fontSize="7.2"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="0.06em"
          >
            01240
          </text>

          {/* Red Control Button */}
          <circle cx="53" cy="39.5" r="4.2" fill="#D94638" />
          <line x1="32" y1="41" x2="42" y2="41" stroke="#8B94A0" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* ============================================================
            DEVICE 3 (RIGHT): Smart Panel Radiator with Thermal Gradient
           ============================================================ */}
        <g transform="translate(234, 158)">
          {/* Thermostatic Valve (TRV) on Top Right */}
          <rect x="92" y="6" width="8" height="5.5" rx="1" fill="#7D8692" />
          <rect x="98" y="3.5" width="10" height="10.5" rx="2.5" fill="#96A0AC" stroke="#5A626D" strokeWidth="1" />

          {/* Radiator Main Body (94 x 72 matching reference aspect ratio) */}
          <rect
            x="0"
            y="0"
            width="94"
            height="72"
            rx="5.5"
            fill="url(#radiatorThermalGrad)"
            stroke="url(#radiatorBorderGrad)"
            strokeWidth="1.6"
          />

          {/* Top & Bottom Collector Manifolds */}
          <rect x="4" y="3.5" width="86" height="4" rx="1.5" fill="#FFFFFF" fillOpacity="0.16" />
          <rect x="4" y="64.5" width="86" height="4" rx="1.5" fill="#000000" fillOpacity="0.20" />

          {/* 11 Vertical Radiator Ribs / Channels */}
          {[7, 15, 23, 31, 39, 47, 55, 63, 71, 79, 86].map((rx) => (
            <g key={rx}>
              <rect
                x={rx}
                y="9"
                width="4.2"
                height="54"
                rx="1.8"
                fill="#0D1622"
                fillOpacity="0.24"
              />
              <line
                x1={rx + 1}
                y1="10"
                x2={rx + 1}
                y2="62"
                stroke="#FFFFFF"
                strokeOpacity="0.20"
                strokeWidth="0.9"
              />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default IoTNetwork;
