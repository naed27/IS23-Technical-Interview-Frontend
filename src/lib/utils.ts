import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { toast } from '../hooks/useToast';

export interface Coordinates {
  x: number,
  y: number
}

export const isOnMobile = () => {
  return (window.innerWidth < window.innerHeight || window.innerHeight < 400)
}

export const subtractCoordinates = (a:Coordinates, b:Coordinates) => {
  const dx = a.x - b.x
  const dy = a.y - b.y

  return {x:dx, y:dy}
}

export const addCoordinates = (a:Coordinates, b:Coordinates) => {
  const sx = a.x + b.x
  const sy = a.y + b.y

  return {x:sx, y:sy}
}

export const randomNumberBetween = ({min=0, max}: {min?: number, max: number}) => {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

export const delay = async (milliseconds:number) => new Promise(res=>setTimeout(res, milliseconds))

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const convertEpochToLocalTime = (
  epoch: number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  }
) => {
  const localTime = new Date(epoch * 1000);
  
  return localTime.toLocaleString(undefined, options);
};

export const openInNewTab = (url: string): void => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

export const stringToArray = <T>(input: string): T[] => {
  try {
    const array = JSON.parse(input);
    if (Array.isArray(array)) {
      return array;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
};



export const toastError = (title: string, description: string) => {
  toast({title, description, variant: 'destructive', duration:1000});
};

export const toastDefault = (title: string, description: string) => {
  return toast({title, description, variant: 'default', duration:1000});
};


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}