"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./Blog.module.css";
import Link from "next/link";




type Blog = {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  url: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "Transforming GeoSpatial Data: My Journey with the Overture Project in the MLH Fellowship",
    image: "/images/blog/mlh.png",
    excerpt: "As part of the MLH Fellowship 24.FAL.A, I’ve embarked on a journey into the world of...",
    content: `As part of the MLH Fellowship 24.FAL.A, I’ve embarked on a journey into the world of geospatial data, a field new to me but one I’ve grown passionate about. From early feelings of imposter syndrome to gaining confidence with every challenge, this experience has deepened my appreciation for technology and the power of persistence. Alongside talented teammate Petar Dosev and with guidance from Meta maintainers Christopher Beddow and Benjamin Clark, I’ve been developing a tool to convert GeoJSON data to OpenStreetMap (OSM) format—a project that’s about more than coding; it’s about enhancing access to valuable geospatial data for communities everywhere.

            Understanding the Overture2OSM Concept
            The Overture project centers on leveraging two significant map datasets, each with unique advantages:

            Overture Maps: Rich with user-generated data about local businesses, Overture includes information such as hours, customer reviews, and business categories—often missing in global datasets—courtesy of Facebook and Microsoft users.

            OpenStreetMap (OSM): Known for its global reach and community-driven accuracy, OSM lacks some hyper-local details due to varying user contributions. The strength of OSM is its broad coverage, yet it benefits from enhancements to local data.

            The diagrams below illustrate the contrast between these two datasets for Lagos, Nigeria:



            Figure 1: Overture Map of Lagos, featuring user-contributed local business data.

            Figure 2: OpenStreetMap for Lagos, renowned for comprehensive coverage but lacking some hyper-local business insights.

            Our mission with Overture2OSM is to bridge this gap by creating a tool that ensures data can move seamlessly between these datasets, ultimately improving the accessibility and quality of OSM’s information.

            My Contributions to the Project so far
            XML Processing and Validation
            In order to enable accurate data handling, I focused on XML processing and validation, a critical skill in geographic information systems (GIS). Using JavaScript’s xml2js library, I implemented a parsing function to convert XML data into manipulatable JavaScript objects. Here’s an excerpt of my code:


            const limit = pLimit(5);
            const argv = minimist(process.argv.slice(2));
            const filenames = argv._;
            const outputOption = argv.output || 'both';

            if (filenames.length === 0 || argv.help) {
            console.log(GeoJSON to OSM Data Converter\n\nUsage: o2o-cli <file.geojson> [...] --output <console|file|both|xml>);
            process.exit(0);
            }
            This setup allows flexible output options, enhancing the tool’s versatility.

            Batch Processing and ConversionBatch Processing and Conversion
            Handling multiple files at once is key to making the tool user-friendly. I designed a batch processing function that allows users to upload and process multiple GeoJSON files simultaneously, checking for large file sizes and handling each based on its attributes. Here’s a look at the batch processing function:


            async function processFilesWithBatching(filenames) {
            const validFiles = filenames.filter(filename => filename.endsWith('.geojson'));

            await Promise.all(validFiles.slice(0, 5).map(filename =>
                limit(async () => {
                try {
                    const content = await fs.readFile(filename, 'utf-8');
                    const data = JSON.parse(content);
                    const osmData = geojsonToOsmXml(data.features);
                    await saveToXmlFile(filename, osmData);
                } catch (error) {
                    console.error(Error processing \${filename}\:, error.message);
                }
                })
            ));
            }
            This function efficiently manages file processing in batches, reducing conversion time and improving usability.

            API Development and File Handling
            Using Express.js and Multer, I built a robust API for file handling and GeoJSON-to-OSM conversions. The API manages file uploads, validates data, and responds with output options based on the user’s preference. Below is a simplified example of the API’s setup:

            import express from 'express';
            const app = express();
            app.use(express.json());

            app.post('/api/convert', upload.single('file'), (req, res) => {
            // Conversion logic here
            res.send('File converted successfully');
            });
            This API enables seamless data conversion while ensuring a smooth user experience with essential error handling.

            Data Normalization and Testing
            Ensuring consistency in data is critical for OSM standards. I implemented functions for normalizing coordinates, street names, postal codes, and more. For example, this function normalizes street names:

            const normalizeStreetName = (name) => {
            const abbreviations = { 'St.': 'Street', 'Ave.': 'Avenue' };
            return name.split(' ').map(part => abbreviations[part] || part).join(' ');
            };
            To verify functionality, I added unit tests using Mocha to ensure the function’s accuracy:

            describe('normalizeStreetName', () => {
            it('should normalize street abbreviations correctly', () => {
                assert.strictEqual(normalizeStreetName('St. John Ave.'), 'Street John Avenue');
            });
            });
            Testing ensures consistent output quality and sets a strong foundation for maintaining the tool over time.

            Enhancing Project Structure
            Maintaining an organized codebase is essential for collaboration. I recently created a dedicated test folder, simplifying project management and encouraging contributions. This organizational improvement has already made it easier for team members to navigate and collaborate.

            Looking Ahead
            In the remaining weeks of the MLH program, we aim to add features for larger datasets and explore visualization options, helping users better understand data transformations. We’re also considering integrating additional data sources to enrich OSM with hyper-local business information and improve usability across diverse applications.

            Acknowledgments
            A huge thank you to my MLH teammates and maintainers from Meta! This journey has not only expanded my technical skills but also underscored the power of collaboration and community in tech.

            Conclusion
            Reflecting on my journey, I’m proud of my progress. I went from doubting my place in the field to contributing meaningfully to a project with real-world impact. It’s been an exciting, challenging experience—and a reminder to keep embracing new challenges with curiosity and determination.`,
    author: "Yemi",
    date: "Nov 3, 2024",
    url: "https://oduyemi.hashnode.dev/transforming-geospatial-data-my-journey-with-the-overture-project-in-the-mlh-fellowship",
  },
  {
    id: 2,
    title: "Web Development Basics: Explaining the fundamentals of web development, including HTML, CSS, and JavaScript",
    image: "/images/blog/web.png",
    excerpt: "From VS Code extensions to obscure CLI tools, here’s what makes my workflow silky smooth.",
    content: `If you were new to this space, you would probably describe the term web development as web design...or maybe its older sibling.

In a way, you might have a point. After all, there's been a long history of sibling rivalry between designers and developers. But that's just a story for another day. In actuality, they differ in role and functionality.

Web designers and web developers are two sides of a coin. They work together, but they function differently.

Web design is concerned with the look and feel of a website or application. On the flip side, web development creates the code that makes it work.

Designers are feelers. They design for excellent user experience and create emotional connections. Developers, on the other hand, are rather pragmatic. They convert designs into production-ready code, adding functionality to it. Sometimes, a designer can go over the moon and create designs that the developer might refer to as a pulpy romance. And there we go again!

What does Web Development even mean?
Web development is all about building and maintaining websites or applications. A whole lot of work goes on behind the scenes to make a good website or application. And there are three major roles in the web development field.

Specialization in Web Development
I published an article some time ago, on web development roles. There, I explained that there are three major roles in web development. With each role focusing on the different areas of web development.

Frontend Development
A front-end developer builds the front end of a website or application using web languages to allow users to access or interact with it. This is usually referred to as client-side, as the processing takes place in the user's browser. Frontend development emphasizes how a website looks and feels on all devices.

Backend Development
Backend development involves writing underlying code for running server-side operations. The Server-side contains the things you can't see on the browser that makes sure the site or application performs as it should.

In a nutshell, here's how it works. The server connects to the client side which is the front end, and makes sure that there's a smooth data flow and transactions work properly.

Full Stack Development
Full stack developers take on both frontend and backend responsibilities. From the client side which is the front end, to the backend server. A full-stack developer designs, create, tests, and deploys complete applications from start to finish.

Full Stack or Not

Some people say that there's no such thing as a full-stack developer. Here's why:

As a developer, you might have practical knowledge of how both frontend and backend programming languages and frameworks. However, there's a tendency that you would focus on one aspect. Still, your knowledge and experience in other areas are useful in Troubleshooting or speeding up a build or redesign.

Must-Have For a Successful Career in Web Development
Creativity
It is said that creativity blurs the line between programmers and designers. As a web developer, especially in the front end, being creative helps you to build awesome user experiences with uncommon interactions that can't be easily replicated.

It is one thing to translate a designer's work into sustainable code. It's another thing to be able to come up with a design and build on your own. For both instances, creativity is required to deliver excellence.

Attention to details
Paying attention to details can never be overemphasised in the world of web development. It not only helps in ensuring that your users' expectations are met but will be useful in debugging and testing. Attention to detail helps you see inconsistencies in alignments, spacing, text and the entire appearance of your work.

Strong Communication Skills
Even if you are a freelancer or you work solo. You can't avoid communicating with clients and customers alike, supervisors, colleagues and even collaboration. Strong communication skills help you to foster good working relationships and it also keeps everyone on the same page.

Frontend
If you want to be a frontend developer...or you already are. Proficiency in web languages and frameworks is crucial.

HTML

This is one of the first things to learn as a web developer. The good news is, it's quite easy to learn. Hypertext Markup Language (HTML) is the standard language for Web pages. It is a formatting system used for showing content retrieved over the Internet. A website is simply a collection of web pages that link to one another through hypertext links.

An HTML file has a .html extension. E.g. index.html, about.html, contact.html etc. Each of these .html files can be seen as web pages on the browser. A typical html structure looks like this:

<!DOCTYPE html>
<html>
<head>
<title>My First Web</title
</head>
<body>
<div>
<h1>Hello World!</h1
<p>This is my corner.</p
</div>
</body>
</html>

<!DOCTYPE html> is a document type declaration required for HTML files. It makes sure that the web page is parsed the same way by different browsers.

The HTML opening and closing tags, <html> define the root of the HTML document. Everything must be inside the html tag; i.e, between the <html> and </html>

The <head> </head> is a container that houses the data about data known as metadata. It also contains elements like <title> </title> which defines the title of the web page, <link /> which connects the HTML document to external files etc.

Everything that the browser displays can be found inside the <body> tag. These include images, paragraphs, headings, links, buttons etc.

If you would like to learn more about HTML, W3Schools is an awesome resource.

CSS

Cascading Style Sheet or CSS is a style sheet language that describes how elements in a markup language should be displayed. In simple terms, HTML is concerned with the layout of the web page. And CSS adds style to it.

Adding the following CSS code to the HTML above will change the appearance of the HTML content:

body {
    background-color: #000000;
}
h1 {

    color: #ffffff;

    text-align: center;

}
p {
    font-size: 16px;
    color: #ffffff;

}

Here's another example. Imagine we have a div container with a class named shop_hero. We can use CSS properties to describe the width, and height and even change the background image.


.shop_hero{
  height: 480px;
  background-image: url(../images/food.jpg);
  background-size: cover;
  background-position-y: 74%;
  width:100%;
}


JAVASCRIPT

I wrote a few things about JavaScript in my previous article, Introduction to Programming Languages. It is a high-level, object-oriented scripting language that allows you to dynamically update content, animate images, control multimedia and a whole lot more.

As you probably already know, it's all connected. HTML is the web page layout, CSS is the stylist and JavasScript is the spice that adds dynamic interaction to the entire thing.

Here's an example of using JavaScript to create a slideshow of food products:


        <section>
          <div class="row mb-5 mx-auto justify-content-around align-content-center" id="slider">
            <div class="col-md-12 mt-5 text-center">
              <h2 class="intro">BRINGING GOOD FOOD INTO YOUR EVERYDAY</h2>
          </div>
            <div class="col-md-2 mx-auto">
              <img src="" alt="" name="slide" height="80" width="360" class="img-thumbnail my-5">
            </div>
          </div>
        </section>

var i = [0];
var images = [];
var time = 3000;
images[0] = "./static/images/slides/a.jpg";
images[1] = "./static/images/slides/b.jpg";
images[2] = "./static/images/slides/c.jpg";
images[3] = "./static/images/slides/d.jpg";
images[4] = "./static/images/slides/e.jpg";
images[5] = "./static/images/slides/f.jpg";
images[6] = "./static/images/slides/g.jpg";
function changeImg() {
    if (i < images.length) {
        document.slide.src = images[i];
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;


Research shows that as of 2022, 98% of websites use JavaScript in their front end for dynamic webpage behaviour. It is lightweight and runs spontaneously.

There are awesome front-end frameworks for building modern websites and applications, depending on your choice of programming language. These include Vue, React, Angular, Next JS, Vaadin, Grails, Ruby on Rails etc.

Design
As a developer, one skill you cannot overlook is design. Having a good idea of graphics design and/or user interface and user experience is a great plus. Also, responsiveness in web development is a real biggie. It's not just about knowing how to build websites or applications. Your work has to be neat across all devices.

If you are a backend developer, you might not concern yourself with many design or frontend issues. But you will be in a better place when you understand how it works.

Content Management System
There are several Content Management Systems (CMS) like WordPress, Joomla, Wix, Squarespace etc. that help you build no-code websites. These can come in handy when you want to build simple websites. Having a good idea of how content management systems work can help you take advantage of headless CMS for your front-end projects. This will allow you to manage your content in one place, and deploy it on any digital channel of your choice.

Backend
As a backend developer, you should be familiar with one or more server-side programming and technical languages. Python, SQL, NoSQL, Java, JavaScript. Backend frameworks like Django, Flask, Node, Express JS Spring Boot etc. The backend is made up of the structure of the site, system, data, and backend logic.

Backend Logic

This is the process of how you execute your server-side code in the context of the application, it can handle both very simple and very performance-intensive operations.

Application Programming Interfaces (API)

This is a software go-between that allows two applications to interact with each other by sharing and extracting data. An in-depth understanding of APIs and backend logic is required for a successful career in backend development.

Version Control Systems
Understanding Git or other version control systems is extremely important to a web developer. The version control system helps you manage your source code by tracking all your modifications. Git is one of the most popular version control systems, with GitHub as a hosting service for Git repositories. You can start with working your basic git commands. And then grow into pull requests and collaborations.

SEO
Knowing about Search Engine Optimization helps you to build websites or applications that will easily rank high on search engines. Aside from using frameworks like Next JS which helps you scale better with SEO. When you understand basic SEO concepts and how search crawlers, you can be intentional about developing web projects that are SEO-friendly. Here are a few cards while building your web projects to rank high on Google and other search engines.

Use Semantic HTML Elements

Semantic HTML elements are tags that explicitly describe their meanings in a human-and machine-readable manner. This makes it easier for site crawlers to pick. Examples of these elements include <header>, <article>, <aside>, <main>, <nav> etc.

<header> <h1>The title here</h1> <p>Posted by Sade Audu</p> <p>More comments here</p> </header>

The above code is an example of a header element which usually contains introductory content or links for the navigation menu. Let's take a broader example:


<body> 
<main>
        <nav class="navbar bg-light" aria-label="Light offcanvas navbar">
            <div class="container-fluid">
                <span>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                <span class="navbar-toggler-icon"></span>
                </button>&emsp;
                <a class="navbar-brand text-success" href="index.html">chow</a></span>
                <span>
                  <a href="cart.html"><i class="fa-solid fa-cart-shopping text-success"></i><span class="badge"></span id="cart"></a>&emsp;
                    <a href="login.html" class="btn btn-success">Log in</a>&emsp;
                    <a href="signup.html" class="btn btn-outline-success">Sign up</a>&emsp;
                </span>
            </div>
          </nav>
</main>
</body>
</html>

Keyword Stuffing

This is an SEO technique that involves infusing relevant high-ranking keywords in content across your web project.

Frameworks
As much as it is good to know a programming language, you should also know and work with various frameworks that would make your life easier as a developer. Web frameworks provide libraries that help with templating, session management, access to databases etc. These frameworks also promote the reuse of code.

Testing and debugging
In web development, errors are inevitable. But the kinds of errors you encounter will differ in terms of skill and experience. However, your debugging skill will help you spot bugs in your code on time. Also, it is important to give quality time to test your code before and after deployment to ensure that there are no glitches for the end users to find.

Are Designers Even Needed?
The answer is Yes! Having to come up with everything from design to code can be overwhelming. Designers specialize in creating fantastic user experiences. This will give you ample time to focus on writing and implementing your code.

Tips For Building A Basic Website
For tips on building modern website development trends, you may check out my previous post. However, here are a few tips that can help in building a basic website.

Define the Purpose of Your Website
It's true what they say, when the purpose of a thing is not known, abuse is inevitable. Take the time to define what the website is about and what you hope to achieve with it. If you are building for a client, you would want to spend quality time with requirement gathering. This will go a long way in determining the website's features and how best to represent it.

Choose Your Development Process
Sometimes, the volume of your web project will determine what process you might choose to work with. If it's something simple, you might want to CMS like WordPress or Squarespace. However, if you want full control of your code, you might want to build a static HTML/CSS project and spice it up with JavaScript or typescript, SASS and other CSS frameworks. also, you might decide to use modern frameworks like React, Next JS, Vue JS, SpringBoot etc. All of these are dependent on what you hope to achieve with the website you are trying to build.

Outline Your Pages
There are a few pages that are common to every website. These include Homepage, About, Contact etc. You want to take the time to plan each content page by page and draw out a wireframe, or at least a web layout before you start building. When you plan well enough, you spend less time building or coding.

Build with SEO in Mind
The moment you start the development process, ensure that what you're building is SEO-friendly. Do thorough research on keywords that are relevant to the niche of the website you're about to create and plan your content in such a way that those keywords are spread across the entire site. Define your metatags and social links. Use semantic elements. You also might want to try out SEO-friendly frameworks like Next Js to give your site a proper boost.

Focus on the Basics
Try not to go out of point. Focus on centring your web content around its brand essence. Don't bore your site's prospective users with irrelevant content or information.

Test Your Work on Real Devices
When the performance of a website or application is not consistent or does not work on certain web browsers, it paves the way for browser compatibility issues, which gives users an experience that is not consistent. These are usually caused by differences in the support of HTML, CSS, JavaScript, and other web technologies by different browsers

These include HTML validation, CSS flexbox, CSS grid, CSS sticky positioning, doctype error, outdated browser detection etc.

Avoid unnecessary drama by making sure that you close all HTML tags in your HTML files.

Use specific CSS codes for specific browsers. When it comes to browsers and CSS commands, here's something to remember:

Chrome and Safari: -webkit

Mozilla Firefox: -moz

Opera: -o

Internet Explorer: -ms

To ensure that your web project is void of these issues, ensure that you test your work on real devices as well as different browsers. Don't just settle for what you see when you inspect your pages. These issues often happen. And you realize that your work is not as perfect as it was during the development stage.`,
    author: "Yemi",
    date: "June 20, 2023",
    url: "https://oduyemi.hashnode.dev/web-development-basics-explaining-the-fundamentals-of-web-development-including-html-css-and-javascript",
  },
  {
    id: 3,
    title: "Introduction to Programming Languages: A comparison of popular programming languages like Python, JavaScript, and Java",
    image: "/images/blog/intro.jpg",
    excerpt: "So, you've decided to embark on the journey of programming? You've probably encountered...",
    content: `I did a deep dive (no pun intended) into why caffeine works backwards on me...`,
    author: "Yemi",
    date: "May 29, 2023",
    url: "https://oduyemi.hashnode.dev/introduction-to-programming-languages-a-comparison-of-popular-programming-languages-like-python-javascript-and-java",
  },
];

export const MyBlog: React.FC = () => {
  const [activeBlog, setActiveBlog] = useState<Blog | null>(null);

  return (
    <section className={styles.blogSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Scribbles from the Dev Cave 📝
      </motion.h2>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className={styles.card}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveBlog(blog)}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className={styles.image}
            />
            <h3>{blog.title}</h3>
            <p className={styles.meta}>
              By {blog.author} · {blog.date}
            </p>
            <p className={styles.excerpt}>{blog.excerpt}</p>
          </motion.div>
        ))}
      </div>

      <div className={styles.ctaContainer}>
        <Link href="https://oduyemi.hashnode.dev" className={styles.projectCta}>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95, rotate: -1 }}
          >
            Go to Blog ↗
          </motion.button>
        </Link>
      </div>

      <AnimatePresence>
        {activeBlog && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBlog(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeBlog.image}
                alt={activeBlog.title}
                width={600}
                height={300}
                className={styles.modalImage}
              />
              <h3>{activeBlog.title}</h3>
              <p className={styles.meta}>
                By {activeBlog.author} · {activeBlog.date}
              </p>
              <div className={styles.content}>
                {activeBlog.content.split("\n").map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
              <a
                href={activeBlog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
              >
                Read Full Article ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};