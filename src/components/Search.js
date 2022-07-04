import React from 'react';
import SearchSVG from '../assets/svgs/SearchSVG.svg';

const Search = () => {
  return (
    <form>
      <div
        className="bg-gray1 h-[51px] 
    flex
    w-[281px]
    gap-x-[10px]
    p-[10px]
    rounded-[10px]
    "
      >
        <img className="w-[16px]" src={SearchSVG} alt={'search'} />
        <input
          type={'text'}
          className={`bg-gray1 outline-none 
    focus:outline-none `}
          placeholder={'Search'}
        />
      </div>
    </form>
  );
};

export default Search;
