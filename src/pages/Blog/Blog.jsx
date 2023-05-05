import { Card } from "react-bootstrap";
import useTitle from "../../hooks/useTitle";


const Blog = () => {
   

    useTitle('Blog')
    return (
        <div  className="text-center">
            <Card >
            <Card.Header style={{fontSize: '1.5rem', font: 'bold', padding:'1rem', margin: '1rem'}}>Whats the difference between un controlled and controlled components ?</Card.Header>
            <Card.Text style={{fontSize: '1rem', font: 'bold', padding:'1rem', margin: '1rem'}}>Uncontrolled components work independently without external control, while controlled components rely on external values and are controlled by them.</Card.Text>
            </Card>

            <Card>
            <Card.Header style={{fontSize: '1.5rem', font: 'bold', padding:'1rem', margin: '1rem'}}>How to Validate React props using Prop Types</Card.Header>
            <Card.Text style={{fontSize: '1rem', font: 'bold', padding:'1rem', margin: '1rem'}}>To Validate PropTypes in React We have to follow these 5 steps: 
                1. Have to Install the prop-types package. 

                2. Have to Import the PropTypes module in component file.

                3. Define the propTypes object for your component, specifying the expected data types and any validation rules.

                4. When using the component, make sure to pass the props according to the defined propTypes.

              
            </Card.Text>
            </Card>

            <Card>
            <Card.Header style={{fontSize: '1.5rem', font: 'bold', padding:'1rem', margin: '1rem'}}>Whats the difference between Node.js and express.js</Card.Header>
            <Card.Text style={{fontSize: '1rem', font: 'bold', padding:'1rem', margin: '1rem'}}>In simple terms, Node.js is the runtime environment that allows us to execute JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides additional features and tools to build web applications more easily.</Card.Text>
            </Card>

            <Card>
            <Card.Header style={{fontSize: '1.5rem', font: 'bold', padding:'1rem', margin: '1rem'}}>What is a Custom hook? Why to create a custom hook?</Card.Header>
            <Card.Text style={{fontSize: '1rem', font: 'bold', padding:'1rem', margin: '1rem'}}>A custom hook is a JavaScript function that allows us to reuse stateful logic in functional components in React. It enables us to extract common logic from components and share it across different parts of your application.</Card.Text>
            <Card.Text style={{fontSize: '1rem', font: 'bold', padding:'1rem', margin: '1rem'}}>By creating custom hooks, I would like to improve my codes reusability, abstraction, organization, and testability, leading to cleaner, more maintainable, and scalable React applications.</Card.Text>
            </Card>
        </div>
    );
};

export default Blog;