'use client';
import { useBranchSelection } from '@/hooks/useBranchSelection';
import { branches } from '@/constants/branches';
import CardItem from './CardItem';
const Cards = () => {
  const { selectBranch } = useBranchSelection();

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {branches.map((branch:any) => (
        <CardItem
          key={branch.id}
          {...branch}
          onSelect={selectBranch}
        />
      ))}
    </div>
  );
};

export default Cards;
