import React from 'react';
import { Play, Youtube, Github, ExternalLink, Gamepad2, Code, Terminal, Layers } from 'lucide-react';

export const IconMap = {
  play: Play,
  video: Youtube,
  github: Github,
  default: ExternalLink,
  gamepad: Gamepad2,
  code: Code,
  terminal: Terminal,
  layers: Layers,
};

interface IconProps {
  name: keyof typeof IconMap;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 20 }) => {
  const LucideIcon = IconMap[name];
  return <LucideIcon className={className} size={size} />;
};