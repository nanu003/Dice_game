import styled from 'styled-components'

const diceImages = Array.from(
  { length: 6 },
  (_, index) => `${import.meta.env.BASE_URL}Images/dice/dice_${index + 1}.png`,
)


function RoleDice({ roleDice, currentDice }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
<<<<<<< HEAD
        <img src={diceImages[currentDice - 1]} alt={`dice showing ${currentDice}`} />
=======
     <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
>>>>>>> a748647d618f1ee40e876a9d5ad867d23a5f24f0
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice

const DiceContainer = styled.div`
   margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
