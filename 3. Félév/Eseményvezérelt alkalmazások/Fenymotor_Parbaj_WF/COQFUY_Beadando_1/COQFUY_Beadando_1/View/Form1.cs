using System.Data;
using Tron_Model.Model;
using Tron_Model.Persistence;
using Timer = System.Windows.Forms.Timer;
namespace COQFUY_Beadando_1
{
    public partial class Form1 : Form
    {

        #region Privát adattagok

        private const string INFORMATION_TEXT = "Given a playing field consisting of n*n elements. The two players are the left and right sides\r\nstarts in the middle with a light engine that moves straight (fixed\r\nintervals) to the last set direction (vertically or horizontally).\r\nWith the motors, it is possible to turn left or right. The light engine is movement\r\nwhile drawing a light streak, which remains there until the end of the game. The first player loses\r\ncollides with the other player's motorcycle, the light strip of any of them, or the track\r\nedge";

        private Label lbl;

        private TronModel? model;

        private bool isGame;

        private int size;


        #endregion
        /// <summary>
        /// Form constructor
        /// </summary>
        public Form1()
        {
            InitializeComponent();
            size = 12;
            isGame = false;
            KeyPress += Form1_KeyPress;
            lbl = new Label();
        }

        //Ha rá nyomunk, szüneteljen a játék
        private void Game_Clicked(object sender, EventArgs e)
        {
            if (isGame)
                model?.Timer.Stop();
        }

        //Ha rá megyünk, elkezdõdik a játék
        private void New_Game(object sender, EventArgs e)
        {
            isGame = true;

            informationOfGameToolStripMenuItem.Enabled = false;
            difficultyToolStripMenuItem.Enabled = false;

            Controls.Remove(lbl);
            Controls.Remove(panel1);
            Controls.Add(panel1);

            model = new TronModel(size, new BinaryFilePersistence());
            model.GameOver += new EventHandler<GameOverEventArgs>(GameOver);
            model.TableRefresh += new EventHandler(ModelTableRefresh);

            model.LeftPlayer.Direction=Direction.Right;
            model.RightPlayer.Direction=Direction.Left;

            Graphics g = panel1.CreateGraphics();
            Pen pen = new Pen(Color.Black);
            int cellSize = panel1.Width / size;
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    int x = i * cellSize;
                    int y = j * cellSize;
                    g.DrawRectangle(pen, x, y, cellSize, cellSize);
                    Brush brush = new SolidBrush(Color.Blue);
                    Brush brush1 = new SolidBrush(Color.Red);
                    if (i == model.LeftPlayer.Y && j == model.LeftPlayer.X)
                    {
                        g.FillRectangle(brush, x, y, cellSize, cellSize);
                        brush.Dispose();
                    }
                    if (i == model.RightPlayer.Y && j == model.RightPlayer.X)
                    {
                        g.FillRectangle(brush1, x, y, cellSize, cellSize);
                        brush1.Dispose();
                    }

                }
            }

            pen.Dispose();
        }

        //Ha szünetel a játék, akkor folytatódik
        private void Resume_Game(object sender, EventArgs e)
        {
            if (isGame)
            {
                model?.Timer.Start();
                informationOfGameToolStripMenuItem.Enabled = false;
                difficultyToolStripMenuItem.Enabled = false;
            }
        }

        //Aktuális Játék leállítása
        private void Finish_Game(object sender, EventArgs e)
        {
            if (isGame)
            {
                MessageBox.Show("You left the game, please start a new game to play", "Left the game", MessageBoxButtons.OK);
                isGame = false;
                difficultyToolStripMenuItem.Enabled = true;
                informationOfGameToolStripMenuItem.Enabled = true;
                model?.Timer.Stop();
            }
        }

        //Aktuális játék elmentése
        private void Save_Game(object sender, EventArgs e)
        {
            if (isGame)
            {
                SaveFileDialog saveFileDialog = new SaveFileDialog();
                saveFileDialog.Filter = "TronModel mentési fájl|*.dat";

                if (saveFileDialog.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        model!.SaveGame(saveFileDialog.FileName);
                    }
                    catch (DataException)
                    {
                        MessageBox.Show("Hiba keletkezett a mentés során.", "TronModel", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }
                }
            }
        }

        //Játék betöltése
        private void Load_Game(object sender, EventArgs e)
        {
            if (!isGame)
            {
                OpenFileDialog openFileDialog = new OpenFileDialog();
                openFileDialog.Filter = "TronModel mentési fájl|*.dat";
                if (openFileDialog.ShowDialog() == DialogResult.OK)
                {
                    try
                    {
                        
                        isGame = true;
                        Controls.Remove(lbl);
                        Controls.Remove(panel1);
                        Controls.Add(panel1);
                        

                        // vizsgálni
                        informationOfGameToolStripMenuItem.Enabled = false;
                        difficultyToolStripMenuItem.Enabled = false;

                        model = new TronModel(new BinaryFilePersistence(), openFileDialog.FileName);
                        model.GameOver += new EventHandler<GameOverEventArgs>(GameOver);
                        model.TableRefresh += new EventHandler(ModelTableRefresh);
                        size = model.TableSize;
                        switch (size)
                        {
                            case 12:
                                easy1212BoardToolStripMenuItem.Checked=true;
                                medium2424BoardToolStripMenuItem.Checked = false;
                                hard3636BoardToolStripMenuItem.Checked = false;
                                break;
                            case 24:
                                easy1212BoardToolStripMenuItem.Checked = false;
                                medium2424BoardToolStripMenuItem.Checked = true;
                                hard3636BoardToolStripMenuItem.Checked = false;
                                break;
                            case 36:
                                easy1212BoardToolStripMenuItem.Checked = false;
                                medium2424BoardToolStripMenuItem.Checked = false;
                                hard3636BoardToolStripMenuItem.Checked = true;
                                break;
                        }


                        Graphics g = panel1.CreateGraphics();
                        Pen pen = new Pen(Color.Black);
                        int cellSize = panel1.Width / model.TableSize;
                        for (int i = 0; i < model.TableSize; i++)
                        {
                            for (int j = 0; j < model.TableSize; j++)
                            {
                                int x = i * cellSize;
                                int y = j * cellSize;
                                g.DrawRectangle(pen, x, y, cellSize, cellSize);
                                Brush brush = new SolidBrush(Color.Blue);
                                Brush brush1 = new SolidBrush(Color.Red);

                                if (model[j, i] == Player.LeftPlayer)
                                {
                                    g.FillRectangle(brush, x, y, cellSize, cellSize);
                                    brush.Dispose();
                                }
                                if (model[j, i] == Player.RightPlayer)
                                {
                                    g.FillRectangle(brush1, x, y, cellSize, cellSize);
                                    brush1.Dispose();
                                }

                            }
                        }

                        pen.Dispose();

                    }
                    catch (DataException)
                    {
                        MessageBox.Show("Hiba keletkezett a mentés során.", "TronModel", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    }

                }
            }
        }

        //Kilépés a játékból
        private void Quit_Game(object sender, EventArgs e)
        {
            Close();
        }

        //Beállítás könnyûre
        private void Set_Easy_Game(object sender, EventArgs e)
        {
            if (!isGame)
            {
               
                easy1212BoardToolStripMenuItem.Checked = true;
                medium2424BoardToolStripMenuItem.Checked = false;
                hard3636BoardToolStripMenuItem.Checked = false;
                size = 12;
            }
        }

        //Beállítás közepes nehézségûre
        private void Set_Medium_Game(object sender, EventArgs e)
        {
            if (!isGame)
            {
                easy1212BoardToolStripMenuItem.Checked = false;
                medium2424BoardToolStripMenuItem.Checked = true;
                hard3636BoardToolStripMenuItem.Checked = false;
                size = 24;
            }
        }

        //Beállítás nehézre
        private void Set_Hard_Game(object sender, EventArgs e)
        {
            if (!isGame)
            {
                easy1212BoardToolStripMenuItem.Checked = false;
                medium2424BoardToolStripMenuItem.Checked = false;
                hard3636BoardToolStripMenuItem.Checked = true;
                size = 36;
            }
        }

        //Információ a játékról
        private void Information_Of_Game(object sender, EventArgs e)
        {
            if (!isGame)
            {
                Controls.Remove(panel1);

                lbl = new Label
                {
                    Location = new Point(65, 30),
                    Text = INFORMATION_TEXT,
                    Width = 500,
                    Height = 600,
                    ForeColor = Color.White, // Fehér betûszín
                    Font = new Font("Segoe UI", 18, FontStyle.Regular), // Segoe UI betûtípus 12 pontos mérettel
                    TextAlign = ContentAlignment.MiddleLeft
                };
                Controls.Add(lbl);
            }

        }
       
        //Játékmenet kezelése
        private void HandleGamePlay()
        {
            Graphics g = panel1.CreateGraphics();
            Pen pen = new Pen(Color.Black);
            int cellSize = panel1.Width / size;
            Brush brush = new SolidBrush(Color.Blue);
            Brush brush1 = new SolidBrush(Color.Red);

            int x1 = 0; int x2 = 0; int y1 = 0; int y2 = 0;
            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    int x = i * cellSize;
                    int y = j * cellSize;
                    g.DrawRectangle(pen, x, y, cellSize, cellSize);

                    if (i == model!.LeftPlayer.Y && j == model.LeftPlayer.X)
                    {
                        x1 = i * cellSize;
                        y1 = j * cellSize;

                    }
                    if (i == model.RightPlayer.Y && j == model.RightPlayer.X)
                    {
                        x2 = i * cellSize;
                        y2 = j * cellSize;

                    }
                }
            }

            g.FillRectangle(brush, x1, y1, cellSize, cellSize);
            g.FillRectangle(brush1, x2, y2, cellSize, cellSize);
            brush.Dispose();
            brush1.Dispose();
            pen.Dispose();
        }
        /// <summary>
        /// Game Over eventhandler
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        public void GameOver(object ?sender, GameOverEventArgs e)
        {
            if (InvokeRequired)
            {
                Invoke(GameOver, sender, e);
                return;
            }
            isGame = false;
            difficultyToolStripMenuItem.Enabled = true;
            informationOfGameToolStripMenuItem.Enabled = true;
            if(e.Player==Player.LeftPlayer)
                MessageBox.Show("Game Over, The Blue player has just won! :)", "Game Over", MessageBoxButtons.OK);
            else if(e.Player==Player.RightPlayer)
                MessageBox.Show("Game Over, The Red player has just won! :)", "Game Over", MessageBoxButtons.OK);
            else if(e.Player==Player.NoOne)
                MessageBox.Show("Game Over,Draw! :)", "Game Over", MessageBoxButtons.OK);


        }
       
        //Játék irányítása
        private void Form1_KeyPress(object? sender, KeyPressEventArgs e)
        {
            if (isGame)
            {
                switch (e.KeyChar)
                {
                    case 'a': SetDirectionOfLeftPlayer(Direction.Right, Direction.Left); break;
                    case 's': SetDirectionOfLeftPlayer(Direction.Up, Direction.Down); break;
                    case 'd': SetDirectionOfLeftPlayer(Direction.Left, Direction.Right); break;
                    case 'w': SetDirectionOfLeftPlayer(Direction.Down, Direction.Up); break;
                    case 'i': SetDirectionOfRightPlayer(Direction.Down, Direction.Up); break;
                    case 'j': SetDirectionOfRightPlayer(Direction.Right, Direction.Left); break;
                    case 'k': SetDirectionOfRightPlayer(Direction.Up, Direction.Down); break;
                    case 'l': SetDirectionOfRightPlayer(Direction.Left, Direction.Right); break;
                    default:
                        break;
                }
            }
        }
        
        private void SetDirectionOfLeftPlayer(Direction notEqualTo, Direction toBeEqualTo)
        {
            if (model!.LeftPlayer.Direction != notEqualTo) model.LeftPlayer.Direction=toBeEqualTo;
        }
         
        private void SetDirectionOfRightPlayer(Direction notEqualTo, Direction toBeEqualTo)
        {
            if (model!.RightPlayer.Direction != notEqualTo) model.RightPlayer.Direction=toBeEqualTo;
        }

        private void ModelTableRefresh(object? sender,  EventArgs e)
        {
            HandleGamePlay();
        }
    }
}