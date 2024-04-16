import { profileRadios } from "@/constant/Proflie";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

type Props = {
   value: string;
   title: string;
   name: "category";
   handleChange:
      | ((event: React.ChangeEvent<HTMLInputElement>, value: string) => void)
      | undefined;
};

const RadioInputs = ({ value, title, name, handleChange }: Props) => {
   return (
      <div className="flex flex-col gap-4">
         <label id={name}>{title}</label>
         <RadioGroup
            row
            aria-labelledby={name}
            name={name}
            value={value}
            onChange={handleChange}
         >
            {profileRadios.map((item) => (
               <FormControlLabel
                  value={item.value}
                  key={item.id}
                  control={
                     <Radio
                        sx={{
                           color: " #104547",
                           "&.Mui-checked": {
                              color: "#104547",
                           },
                        }}
                     />
                  }
                  label={item.label}
               />
            ))}
         </RadioGroup>
      </div>
   );
};

export default RadioInputs;
