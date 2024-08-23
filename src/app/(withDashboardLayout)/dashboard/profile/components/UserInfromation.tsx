import { Box, Stack, styled, Typography } from '@mui/material';

const StyledInformationBox = styled(Box)(({ theme }) => ({
   background: '#f4f7fe',
   borderRadius: theme.spacing(1),
   width: '45%',
   padding: '8px 16px',
}));

const UserInformation = ({ data }: any) => {
   //  console.log(data);
    
   return (
      <Box>
         <Typography variant='h6' color='primary.main' mb={2}>
            Personal Information
         </Typography>

         <Stack
            direction={{ xs: 'column', md: 'row' }}
            gap={2}
            flexWrap={'wrap'}
         >
            <StyledInformationBox>
               <Typography color='secondary' variant='caption'>
                  Role
               </Typography>
               <Typography>{data?.role}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
               <Typography color='secondary' variant='caption'>
                  Name
               </Typography>
               <Typography>{data?.name}</Typography>
            </StyledInformationBox>
            <StyledInformationBox sx={{mb: 2}}>
               <Typography color='secondary' variant='caption'>
                  Email
               </Typography>
               <Typography>{data?.email}</Typography>
            </StyledInformationBox>
            <StyledInformationBox sx={{mb: 2}} >
               <Typography color='secondary' variant='caption'>
                  Gender
               </Typography>
               <Typography>{data?.gender}</Typography>
            </StyledInformationBox>
         </Stack>

         <Stack
            direction={{ xs: 'column', md: 'row' }}
            flexWrap={'wrap'}
            gap={2}
         >
            <StyledInformationBox>
               <Typography variant='caption' color='secondary'>
                  Contract No
               </Typography>
               <Typography>{data?.contactNumber}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
               <Typography variant='caption' color='secondary'>
                  Address
               </Typography>
               <Typography>{data?.address}</Typography>
            </StyledInformationBox>
            <StyledInformationBox>
               <Typography variant='caption' color='secondary'>
                  Joined
               </Typography>
               <Typography>
                  {data
                     ? new Date(data?.createdAt).toLocaleDateString('en-US', {
                          month: '2-digit',
                          day: '2-digit',
                          year: '2-digit',
                       })
                     : null}
               </Typography>
            </StyledInformationBox>
            <StyledInformationBox>
               <Typography variant='caption' color='secondary'>
                  Current Status
               </Typography>
               <Typography>{data?.status}</Typography>
            </StyledInformationBox>
         </Stack>
      </Box>
   );
};

export default UserInformation;