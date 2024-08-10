import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn
  appearance={{
    elements: {
      cardBox:{
        borderRadius: "0.5rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(0, 0, 0, 0.1)",
      },
      logoImage:{
        height:"1.2rem"
      },
      
      formButtonPrimary: {
        height: "3rem",
        fontSize: 16,
        textTransform: "none",
        borderRadius: "0.2rem",  
        backgroundColor: "#FF8125",
        border: "1px solid #FF8125",  // Explicitly set the border to the same color as the background
        boxShadow: "none !important", // Ensure the shadow is removed
        "&:hover, &:focus, &:active": {
            backgroundColor: "#FF6C00",
            borderColor: "#FF6C00",  // Change the border color to match the hover background
        },
      },
      formFieldInput:{
        height: "3rem",
        fontSize: 14,
        borderRadius: "0.2rem",  
      },
      phoneInputBox:{
        borderRadius: "0.2rem", 
      },
      socialButtonsIconButton:{
        borderRadius: "5rem",  
        height: "3rem",
      }
    
    },
    layout: {
      shimmer:true,
      logoPlacement:'inside'
    },
    variables: {
      fontWeight:{normal: 400, medium: 400, bold: 500},
      fontSize:'0.875rem'
    },
    
  }}
/>;
}