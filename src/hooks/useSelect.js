export const useSelect = () => {
  const optionsLanguages = [
    { value: "French", label: "French" },
    { value: "English", label: "English" },
    { value: "German", label: "German" },
    { value: "Spanish", label: "Spanish" },
    { value: "Italian", label: "Italian" },
    { value: "Korean", label: "Korean" },
    { value: "Mandarin Chinese", label: "Mandarin Chinese" },
    { value: "Vietnamese", label: "Vietnamese" },
  ];

  const optionsLevelOfKnowledge = [
    { value: "A1 Beginner", label: "A1 Beginner" },
    { value: "A2 Elementary", label: "A2 Elementary" },
    { value: "B1 Intermediate", label: "B1 Intermediate" },
    { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
    { value: "C1 Advanced", label: "C1 Advanced" },
    { value: "C2 Proficient", label: "C2 Proficient" },
  ];

  const optionsPrice = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
    { value: "25", label: "25" },
    { value: "30", label: "30" },
    { value: "35", label: "35" },
    { value: "40", label: "40" },
  ];

  const colourStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: state.selectProps.id === "price" ? "124px" : "220px",
      borderRadius: "14px",
      padding: "7px 9px",
      background: "#fff",
      border: "none",
    }),
  };

  const themeStyles = (theme) => ({
    ...theme,
    borderRadius: 10,
    colors: {
      ...theme.colors,
      primary25: "#fbe9ba",
      primary: "#f4c550",
    },
  });
  return {
    optionsLanguages,
    optionsLevelOfKnowledge,
    optionsPrice,
    colourStyles,
    themeStyles,
  };
};
