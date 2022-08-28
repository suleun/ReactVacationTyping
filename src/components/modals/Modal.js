import React from 'react';
import '../modals/modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              X
            </button>
          </header>
          <main>
        
            {props.children}
           <div class=" flex justify-evenly space-x-auto mt-3">
            <label for="underline_select" class="text-left font-bold  w-1/2">  to study : </label>
                <select id="underline_select" class=" w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200">
                    <option selected="">Choose a country</option>
                    <option value="ja">Japan</option>
                    <option value="ko">Korea</option>
                </select>

           </div>
           <div class=" flex justify-evenly space-x-auto mt-3">
            <label for="underline_select" class=" w-1/2 text-left font-bold"> to Practice typing : </label>
                <select id="underline_select" class=" w-1/2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200">
                    <option selected="">Choose a country</option>
                    <option value="ja">Japan</option>
                    <option value="ko">Korea</option>
                </select>

           </div>
          
          </main>
          <footer>
            <button className="close" onClick={close}>
              Select
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal