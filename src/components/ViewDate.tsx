export default function ViewDate() {
  // 현재 연월일을 계산하는 함수 fullDate
  const fullDate = () => {
    const nowYear = new Date().getFullYear();
    const nowMonth = `0${new Date().getMonth() + 1}`.slice(-2);
    const nowDate = `0${new Date().getDate()}`.slice(-2);

    return `${nowYear}.${nowMonth}.${nowDate}`;
  };

  return (
    <>
      <div>{fullDate()}</div>
    </>
  );
}
