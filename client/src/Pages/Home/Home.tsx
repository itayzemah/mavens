import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UsernameFormElement } from '.';
import { createUser } from '../../api';
import * as S from './style';

export function Home() {
  const navigate = useNavigate();

  const handleStartClick = async (e: React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.elements.usernameInput.value;
    const createdUser = username && (await createUser({ username }));
    if (createdUser) {
      navigate('/lobby');
    }
  };

  return (
    <>
      <S.GitWrapper>
        <S.Gif src="https://giphy.com/embed/cC9Ue0I59m5NEJTlMH" width="480" height="271" allowFullScreen></S.Gif>
      </S.GitWrapper>
      <S.Title>Welcome to the Reaction Game!</S.Title>
      <S.FormContainer onSubmit={handleStartClick}>
        <S.Text>Please enter you name:</S.Text>
        <S.Input type="text" placeholder="Your Name" id="usernameInput" />
        <S.Button>START</S.Button>
      </S.FormContainer>
    </>
  );
}
