import { Box, Container, Typography } from "@mui/material"
import draganddrop from '../assets/draganddrop.jpg'
import security from '../assets/security.jpg'
import csort from '../assets/csort.jpg'
import edit from '../assets/edit.jpg'
import userfriendly from '../assets/userfriendly.jpg'

const FeaturedServices = () => {
  return (
    <Container maxWidth="xl" >
      <Typography variant="h2" align="center" fontWeight='bold' py={5} >Our Featured Service</Typography>
      {/* part 1 */}
      <Typography 
      variant="h4" align="center" py={5}
      >Drag-and-Drop Task Management</Typography>
      {/* container */}
<Box className='space-y-5 flex justify-center items-center gap-5 flex-col md:flex-row'>
  {/* image div */}
<Box className='w-full md:w-1/2'>
<img src={draganddrop} alt="drag and drop Image" className="h-96 object-fit w-full border-[30px] rounded-xl border-solid border-blue-500"/>
</Box>
{/* text div */}
        <Box className='w-full md:w-1/2 space-y-5'>
        <Typography variant="h6">Streamlining Your Workflow with Ease</Typography>
        <Typography variant="body1">In the fast-paced world of task management, efficiency and simplicity are key to ensuring productivity and success. One standout feature that sets our platform apart is the innovative Drag-and-Drop Task Management functionality. This powerful tool empowers users to effortlessly organize their tasks, offering a seamless and intuitive experience across the Todo, Ongoing, and Completed categories.</Typography>
        <Typography variant="h6">Simplicity in Action</Typography>
        <Typography variant="body1">The beauty of the Drag-and-Drop functionality lies in its simplicity. Users can easily reorder tasks based on changing priorities, ensuring that the most crucial items are at the forefront of their attention. Whether you're moving a task from Todo to Ongoing to mark progress or shifting it to Completed to celebrate an accomplishment, the process is as effortless as the flick of a wrist.</Typography>
          
        </Box>
      </Box>

 {/* part 2 */}
 <Typography 
      variant="h4" align="center" py={5}
      >Category Sorting</Typography>
      {/* container */}
<Box className='space-y-5 flex justify-center items-center gap-5 flex-col md:flex-row'>
  {/* text div */}
  <Box className='w-full md:w-1/2 space-y-5'>
        <Typography variant="h6">A Seamless Approach to Task Organization</Typography>
        <Typography variant="body1">In the dynamic realm of task management, our Category Sorting feature stands as a beacon of efficiency and clarity. Users can effortlessly organize their tasks into three distinct categories: Todo, Ongoing, and Completed. This intuitive categorization system serves as a powerful tool, enabling users to prioritize their workload and track the status of each task at a glance.</Typography>
        
        <Typography variant="body1">The convenience of Category Sorting lies in its simplicity. Users can easily assign tasks to the appropriate category based on their current status. Whether a task is yet to be started, actively in progress, or successfully completed, the visual distinction between Todo, Ongoing, and Completed provides instant clarity. This categorization empowers users to focus on the tasks that demand immediate attention, ensuring that nothing slips through the cracks.</Typography>
          
        </Box>
  {/* image div */}
<Box className='w-full md:w-1/2'>
<img src={csort} alt="drag and drop Image" className="h-96 object-fit w-full border-[30px] rounded-xl border-solid border-blue-500"/>
</Box>
      </Box>

           {/* part 3 */}
           <Typography 
      variant="h4" align="center" py={5}
      >Robust Security Measures for Peace of Mind</Typography>
      {/* container */}
<Box className='space-y-5 flex justify-center items-center gap-5 flex-col md:flex-row'>
  {/* image div */}
<Box className='w-full md:w-1/2'>
<img src={security} alt="drag and drop Image" className="h-96 object-fit w-full border-[30px] rounded-xl border-solid border-blue-500"/>
</Box>
{/* text div */}
        <Box className='w-full md:w-1/2 space-y-5'>
        <Typography variant="h6">End-to-End Encryption</Typography>
        <Typography variant="body1">Our platform prioritizes the security of your task data by implementing end-to-end encryption. This means that your tasks, project details, and any sensitive information are encrypted from the moment they leave your device until they reach our servers. This robust encryption ensures that even if intercepted during transit, your data remains unreadable and secure.</Typography>
        <Typography variant="h6">Multi-Factor Authentication (MFA)</Typography>
        <Typography variant="body1">Elevating the security of your account, we've implemented Multi-Factor Authentication (MFA). This additional layer of protection goes beyond traditional username and password methods. With MFA, accessing your account requires a second verification step, usually through a code sent to your registered mobile device or email.  </Typography>
        </Box>
      </Box>


      {/* part 4 */}
 <Typography 
      variant="h4" align="center" py={5}
      >Real-time Updates</Typography>
      {/* container */}
<Box className='space-y-5 flex justify-center items-center gap-5 flex-col md:flex-row'>
  {/* text div */}
  <Box className='w-full md:w-1/2 space-y-5'>
        <Typography variant="h6">Instant Syncing Across Devices</Typography>
        <Typography variant="body1">Experience the power of instant syncing as any changes made to your tasks are seamlessly propagated across all your devices in real-time. Whether you update a task on your desktop, tablet, or smartphone, the changes are reflected instantly. This ensures that you have access to the most up-to-date information wherever you are, fostering a connected and efficient workflow. No more waiting for manual updates or worrying about inconsistencies – our real-time syncing brings unparalleled cohesion to your task management experience.</Typography>
        <Typography variant="h6">Enhanced Collaboration</Typography>
        <Typography variant="body1">Real-time updates play a pivotal role in enhancing collaboration within your team. As team members contribute to and modify tasks, the changes are immediately visible to everyone involved. This fosters a collaborative environment where everyone is on the same page, promoting transparency and reducing the risk of miscommunication. Whether you're working on a shared project or collaborating with remote team members, the real-time syncing feature ensures that everyone stays informed and engaged, elevating the overall efficiency of your collaborative efforts.</Typography>
          
        </Box>
  {/* image div */}
<Box className='w-full md:w-1/2'>
<img src={edit} alt="drag and drop Image" className="h-96 object-fit w-full border-[30px] rounded-xl border-solid border-blue-500"/>
</Box>
      </Box>

 {/* part 5 */}
 <Typography 
      variant="h4" align="center" py={5}
      >User-Friendly Interface</Typography>
      {/* container */}
<Box className='space-y-5 flex justify-center items-center gap-5 flex-col md:flex-row'>
  {/* image div */}
<Box className='w-full md:w-1/2'>
<img src={userfriendly} alt="drag and drop Image" className="h-96 object-fit w-full border-[30px] rounded-xl border-solid border-blue-500"/>
</Box>
{/* text div */}
        <Box className='w-full md:w-1/2 space-y-5'>
        <Typography variant="h6">Intuitive Design</Typography>
        <Typography variant="body1">Our platform boasts an intuitive and user-friendly interface designed with you in mind. Navigating through tasks, categories, and settings is a seamless experience, ensuring that even users new to task management can easily find their way around. The intuitive design minimizes the learning curve, allowing you to focus on your tasks rather than figuring out complex features. From drag-and-drop functionality to streamlined categorization, every element is thoughtfully crafted for optimal user interaction.</Typography>
        <Typography variant="h6">Enhanced Usability Features</Typography>
        <Typography variant="body1">In addition to its intuitive design, our platform incorporates a range of features to enhance overall usability. Users can leverage keyboard shortcuts for quick and efficient task management, saving valuable time and adding an extra layer of convenience. The responsive design ensures a consistent and enjoyable experience across various devices, adapting seamlessly to desktops, tablets, and smartphones. </Typography>
        </Box>
      </Box>


    </Container>
  )
}

export default FeaturedServices