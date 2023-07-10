import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';


const containsText = (text: string, searchText: string) =>
  text?.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1;

export interface ISelectTextField {
  options: string[];
  onChange: any;
  title: string;
}

const SelectTextfield: React.FC<ISelectTextField> = ({
  title,
  onChange,
  options,
}) => {
 
  
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const displayedOptions = useMemo(
    () => options.filter((option) => containsText(option, searchText)),
    [searchText]
  );
  useEffect(() => {
    setLoading(false);
    console.log(options);
 
  }, [options]);
  return (
    <FormControl fullWidth>
      <InputLabel id="search-select-label">{title}</InputLabel>
      {!loading ? (
        <Select
          name="group"
          MenuProps={{ autoFocus: false }}
          labelId="search-select-label"
          id="search-select"
          value={selectedOption}
          label="Technicians"
          onChange={(e) => {
            setSelectedOption(e.target.value);
            console.log(selectedOption);
            onChange(e);
          }}
          onClose={() => setSearchText('')}
          renderValue={() => selectedOption}
        >
          <ListSubheader>
            <TextField
              size="small"
              autoFocus
              placeholder="Type to search..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Escape') {
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {displayedOptions.map((option, i) => (
            <MenuItem key={i} value={option.split("_")[1]}>
              {option.split("_")[0]}
            </MenuItem>
          ))}
        </Select>
      ) : null}
    </FormControl>
  );
};

export default SelectTextfield;
