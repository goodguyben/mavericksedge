import React from 'react';

export const CursorIcon: React.FC = () => (
  <svg
    height="1em"
    style={{flex: "none", lineHeight: "1"}}
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full transition-all duration-300"
  >
    <title>Cursor</title>
    <g className="group-hover/item:[&_path]:fill-[url(#cursor-gradient-0)] group-hover/item:[&_path]:fill-[url(#cursor-gradient-1)] group-hover/item:[&_path]:fill-[url(#cursor-gradient-2)] group-hover/item:[&_path]:fill-[#555] group-hover/item:[&_path]:fill-[#000]">
      <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill="url(#cursor-gradient-0-default)"></path>
      <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill="url(#cursor-gradient-1-default)"></path>
      <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill="url(#cursor-gradient-2-default)"></path>
      <path d="M22.35 6L11.925 24V12L22.35 6z" fill="white"></path>
      <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill="white"></path>
    </g>
    <defs>
      {/* Default white gradients */}
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-0-default" x1="11.925" x2="11.925" y1="12" y2="24">
        <stop offset=".16" stop-color="white" stop-opacity=".39"></stop>
        <stop offset=".658" stop-color="white" stop-opacity=".8"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-1-default" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
        <stop offset=".182" stop-color="white" stop-opacity=".31"></stop>
        <stop offset=".715" stop-color="white" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-2-default" x1="11.925" x2="1.5" y1="0" y2="18">
        <stop stop-color="white" stop-opacity=".6"></stop>
        <stop offset=".667" stop-color="white" stop-opacity=".22"></stop>
      </linearGradient>

      {/* Hover colored gradients */}
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-0" x1="11.925" x2="11.925" y1="12" y2="24">
        <stop offset=".16" stop-color="#000" stop-opacity=".39"></stop>
        <stop offset=".658" stop-color="#000" stop-opacity=".8"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-1" x1="22.35" x2="11.925" y1="6.037" y2="12.15">
        <stop offset=".182" stop-color="#000" stop-opacity=".31"></stop>
        <stop offset=".715" stop-color="#000" stop-opacity="0"></stop>
      </linearGradient>
      <linearGradient gradientUnits="userSpaceOnUse" id="cursor-gradient-2" x1="11.925" x2="1.5" y1="0" y2="18">
        <stop stop-color="#000" stop-opacity=".6"></stop>
        <stop offset=".667" stop-color="#000" stop-opacity=".22"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default CursorIcon;
