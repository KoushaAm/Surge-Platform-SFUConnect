const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-20">
      <h1 className="text-3xl font-bold font-rubik mb-6 p-10">About Us</h1>
      
      <ul className="text-lg font-rubik p-5">
        <li>
          <p className="mb-10">At MyConnect, we are passionate about creating a vibrant university experience for students. Our platform serves as a hub for meaningful connections, personal growth, and academic success. Here’s what defines us:</p>
        </li>
        <li><span className="font-bold">Community:</span> We believe in fostering a sense of belonging. MyConnect connects students with peers, clubs, and organizations.</li>
        <li><span className="font-bold">Empowerment:</span> Our mission is to empower students through extracurricular activities and leadership opportunities, equipping them to shape their futures.</li>
        <li><span className="font-bold">Growth:</span> At MyConnect, we celebrate growth and self-discovery. Whether it’s exploring new interests or honing existing talents, we encourage students to thrive.</li>
      </ul>
    </div>
  );
};

export default About;
