import { useState } from "react";
// have to rename form since it's the same name as our function
import { Form as BootstrapForm, Button, Container } from "react-bootstrap";

function Form(props) {
  const { movieSearch, setMovie } = props;

  // formData is an object
  const [formData, setFormData] = useState({ searchTerm: "" });

  // handle change on the input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle the on submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await movieSearch(formData.searchTerm);
    setMovie(data);
  };

  return (
    <Container className="mt-3">
      <BootstrapForm onSubmit={handleSubmit}>
        <BootstrapForm.Group className="button">
          <BootstrapForm.Control
            className="input" 
            type="text" 
            value={formData.searchTerm} 
            name="searchTerm" 
            placeholder="Search movie title" 
            onChange={handleChange} 
          />

          <Button variant="info" type="submit">Search</Button>
        </BootstrapForm.Group>
      </BootstrapForm>
    </Container>
  );
}

export default Form;
