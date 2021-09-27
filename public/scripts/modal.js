export default function modal(){

  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel');
  
  cancelButton.addEventListener("click", close)

  function open(){
    //atribuir a classe active da modal

    modalWrapper.classList.add("active")

  }
  function close(){
    //excluir a classe active da modal
    modalWrapper.classList.remove("active")
  }

  return {
    open,
    close
  }
}