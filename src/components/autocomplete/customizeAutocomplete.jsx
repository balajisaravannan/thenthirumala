import {
  Autocomplete,
  FormControl,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { memo } from "react";

const CustomizeAutocomplete = ({
  id,
  placeholder,
  getOptionLabel,
  options,
  value,
  onChange,
  title,
  noOptionsText,
}) => {
  const theme = useTheme(); // Access the current theme

  return (
    <Autocomplete
      disablePortal={false}
      disableClearable
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      value={value}
      onChange={onChange}
      fullWidth
      noOptionsText={noOptionsText}
      size='small'
      ListboxProps={{
        style: {
          fontSize: 13,
          color: '#00000',
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          focused={false}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              fontSize: 13,
              color:'#344054',
              fontWeight: 400,
              "& fieldset": {
                borderColor: "#E5E1DA",
                borderWidth: "1.4px",
                borderRadius:'10px'
              },
              "&:hover fieldset": {
                borderColor: "#7D7C7C",
                borderWidth: "1.4px",
              },
            },
            "& .Mui-selected": {
              backgroundColor: '#fffff',
            },
            "& .MuiInputLabel-root": {
              color: "#7D7C7C",
              "&.Mui-focused": {
                backgroundColor:'#fffff',
              },
            },
          }}
        />
      )}
    />
  );
};

export default memo(CustomizeAutocomplete);
