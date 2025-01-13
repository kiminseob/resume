const getDiffMonth = (stateDate, endDate) => {
  const dateOfjoining = new Date(stateDate);
  const today = new Date(endDate);
  const diffDate = today.getTime() - dateOfjoining.getTime();
  const totalDiffMonth = Math.floor(
    Math.abs(diffDate / (1000 * 60 * 60 * 24 * 30))
  );
  const diffYear = Math.floor(totalDiffMonth / 12);
  const diffMonth = (totalDiffMonth % 12) + 1;
  return { diffYear, diffMonth };
};

export const getTotalCareerDate = (stateDate, endDate = new Date()) => {
  const { diffYear, diffMonth } = getDiffMonth(stateDate, endDate);
  return diffYear === 0 ? `${diffMonth}개월` : `${diffYear}년 ${diffMonth}개월`;
};
