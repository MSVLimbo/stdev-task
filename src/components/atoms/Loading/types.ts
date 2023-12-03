export enum LoadingSizes {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

interface ILoading {
  isLocal?: boolean;
  zIndex?: number;
  size?: LoadingSizes;
  noAbsolute?: boolean;
}

export default ILoading;
