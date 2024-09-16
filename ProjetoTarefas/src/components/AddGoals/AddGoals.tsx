import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { DialogProps } from '@mui/material/Dialog';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Exemplo de ícone
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'; // Exemplo de ícone
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'; // Exemplo de ícone
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'; // Exemplo de ícone

// Estilizando o papel do diálogo para a posição e tamanho desejado
const CustomPaper = styled('div')(({ theme }) => ({
  width: '33vw', // 1/3 da largura da tela
  height: 'auto', // Ajusta a altura com base no conteúdo
  maxHeight: '80vh', // Máxima altura para evitar overflow
  margin: 'auto', // Centraliza verticalmente
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  backgroundColor: "gray",
}));

interface AddGoalsProps {
  trigger: React.ReactNode; // O elemento que irá disparar o diálogo
  dialogProps?: Omit<DialogProps, 'open' | 'onClose'>; // Propriedades adicionais para o Dialog
}

// Função para obter o ícone baseado na frequência
const getIconForFrequency = (frequency: number) => {
  switch (frequency) {
    case 1:
      return <CalendarTodayIcon />;
    case 2:
      return <CalendarViewDayIcon />;
    case 3:
      return <CalendarViewWeekIcon />;
    case 4:
      return <CalendarViewMonthIcon />;
    case 5:
    case 6:
    case 7:
      return <CalendarViewMonthIcon />; // Pode ser substituído por ícones mais específicos
    default:
      return <CalendarTodayIcon />;
  }
};

const AddGoals: React.FC<AddGoalsProps> = ({ trigger, dialogProps }) => {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState<number | ''>(1); // Frequência semanal, padrão para 1

  // Função para abrir o diálogo
  const handleClickOpen = () => setOpen(true);

  // Função para fechar o diálogo
  const handleClose = () => {
    setOpen(false);
    setGoal(''); // Limpar o campo ao fechar
    setDescription(''); // Limpar o campo ao fechar
    setFrequency(1); // Resetar a frequência ao fechar
  };

  // Função para salvar a meta
  const handleSave = () => {
    console.log('Meta salva:', goal, description, frequency);
    handleClose();
  };

  return (
    <>
      {/* Elemento que dispara a abertura do diálogo */}
      <div onClick={handleClickOpen}>
        {trigger}
      </div>

      {/* Componente Dialog da MUI */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={CustomPaper} // Usa o componente de papel personalizado
        {...dialogProps}
      >
        <DialogTitle>Cadastrar Nova Meta</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Insira os detalhes da nova meta abaixo:</Typography>
          <TextField
            autoFocus
            margin="dense"
            id="goal"
            label="Nome da Meta"
            type="text"
            fullWidth
            variant="standard"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          />
          <TextField
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Typography variant="h6" marginTop={2}>Quantas vezes na semana?</Typography>
          <RadioGroup
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            name="frequency"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <FormControlLabel
                key={num}
                value={num}
                control={<Radio />}
                label={
                  <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                    {getIconForFrequency(num)}
                    {num} vez{num > 1 ? 'es' : ''}
                  </Typography>
                }
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" color="success" onClick={handleSave}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddGoals;
