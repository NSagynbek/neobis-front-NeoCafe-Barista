import { InputAdornment,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./searchInput.css";

function SearchInput() {
  return (
    <div className='header-options__input_container'>
      <input 
        type="text" 
        className="header-options__input_search"
        placeholder="Поиск"
      />
      <InputAdornment 
        className='header-options__icon_search' 
        position="start"
      >
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>  
    </div>
  );
}

export default SearchInput;
