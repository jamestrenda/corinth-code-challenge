import { Directory } from '@/components/directory';
import characters from '../data/characters.json';

export default function Home() {
  return <Directory characters={characters} />;
}
