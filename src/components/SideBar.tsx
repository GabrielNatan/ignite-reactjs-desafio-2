import { Button } from '../components/Button';

interface SidebarPros{
  genres:GenreResponseProps[];
  handleClickButton:(value:number)=>void;
  selectedGenreId:number;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({genres,handleClickButton,selectedGenreId}:SidebarPros){
 return(
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => handleClickButton(genre.id)}
        selected={selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
 )
}