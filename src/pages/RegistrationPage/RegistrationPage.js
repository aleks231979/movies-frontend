import MainRegistration from '../../components/Main/Registration/MainRegistration';

function RegistrationPage({
  Header,
  isLoggedIn,
  closeOpenMenu,
  isOpenMenu,
  onSubmitForm,
  isEmail,
  setIsEmail,
  isName,
  setIsName,
}) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        closeOpenMenu={closeOpenMenu}
        isOpenMenu={isOpenMenu}
        textGreetings={`Добро пожаловать!`}
      />
      <MainRegistration
        onSubmitForm={onSubmitForm}
        isEmail={isEmail}
        setIsEmail={setIsEmail}
        isName={isName}
        setIsName={setIsName}
      />
    </>
  );
}

export default RegistrationPage;