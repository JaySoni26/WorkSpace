import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganisationPage(){
    return (
        <OrganizationList 
            hidePersonal
            afterSelectOrganizationUrl="/organization/:id"
            afterCreateOrganizationUrl="/organization/:id"
            appearance={{
                elements: {
                  logoImage:{
                    height:"1.2rem"
                  },
                  formButtonPrimary: {
                    height:"2.4rem",
                    fontSize: 14,
                    textTransform: "none",
                    backgroundColor: "#000000",
                              "&:hover, &:focus, &:active": {
                                backgroundColor: "#2A2A2A",
                              },
                  },
                },
                layout: {
                  shimmer:true,
                  logoPlacement:'inside'
                },
                variables: {
                  fontWeight:{normal: 400, medium: 400, bold: 500},
                  borderRadius:'0.3rem',
                  fontSize:'0.875rem'
                }
              }}
        />
    );
};