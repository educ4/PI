import React from 'react';
import styles from './Registrar.module.css';
import Input from '../../form/input';
import Select from '../../form/select';
import SubmitButton from '../../form/submitButton';
  


  function Registrar(){

    

    return(
      
      <div className={styles.container}>
        <form className={styles.form}>

            <h1>Formulário de Cadastro</h1>

            <Input 
              type="text"
              text="Nome Completo: "
              name="name"
              placeholder="Nome Completo"
              
            />

            <Input 
              type="text"
              text="CPF ou CFEP: "
              name="id"
              placeholder="CPF ou CFEP:"
              
            />

            <Input 
              type="email"
              text="E-mail: "
              name="email"
              placeholder="e-mail"
              
            />

            <Input 
              type="text"
              text="Número de Telefone"
              name="num"
              placeholder="ex.: (11)99999-9999"
              
            />

            <Select 
              name="categories" 
              text="Sexo: "
              placeholder ="Selecione um Gênero:" 
              //options ={categories}
            />
            
            <Input 
              type="password"
              text="Senha: "
              name="password"
              placeholder="Digite uma senha de 8 ou mais digítos."
              
            />

            <Input 
              type="password"
              text="Senha: "
              name="password"
              placeholder="Repita a senha."
              
            />
            <div className={styles.buttonBox}>
              <SubmitButton 
                text="Cadastrar-se como Aluno"
              />
              <SubmitButton 
                text="Cadastrar-se como Professor" 
              /> 
            </div>
            
           
        </form>
      </div>

    )  
  }   
  
  
export default Registrar