import styled from 'styled-components';

const Cabecalho = styled.header`
  background-color: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  background-color: #61dafb;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #21a1f1;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 50px;
  background: #f4f4f4;
`;

const HeroTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const VagaContainer = styled.li`
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  list-style: none;
`;

const VagaTitulo = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const VagaLink = styled.a`
  display: block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export { Cabecalho, Form, Input, Button, HeroSection, HeroTitle, VagaContainer, VagaTitulo, VagaLink };
