using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Tron_Model.Persistence;
using System.Threading.Tasks;
using System.Reflection;

namespace Tron_Model.Model
{
    public class TronModel
    {
       

        private readonly Player[,] gameTable;

        private readonly IPersistence _persistence;
        /// <summary>
        /// Game over eventhandler
        /// </summary>
        public event EventHandler<GameOverEventArgs>? GameOver;
        /// <summary>
        /// Event to refresh the Table
        /// </summary>
        public event EventHandler? TableRefresh;
        /// <summary>
        /// If the left play won
        /// </summary>
        public bool LeftWinner { get; private set; }
        /// <summary>
        /// If the right player won
        /// </summary>
        public bool RightWinner { get; private set; }
        /// <summary>
        /// Left Player Object
        /// </summary>
        public PlayerWithCordinates LeftPlayer { get; set; }
        /// <summary>
        /// Right player object
        /// </summary>
        public PlayerWithCordinates RightPlayer { get; set; }
        /// <summary>
        /// Timer to move
        /// </summary>
        public System.Timers.Timer Timer { get; set; }


       /// <summary>
       /// get the table size
       /// </summary>
        public int TableSize
        {
            get { return gameTable.GetLength(0); }
        }

        /// <summary>
        /// get the player on the board
        /// </summary>
        /// <param name="x"></param>
        /// <param name="y"></param>
        /// <returns></returns>
        /// <exception cref="ArgumentException"></exception>
        public Player this[int x, int y]
        {
            get
            {
                if (x < 0 || x >= gameTable.GetLength(0)) // ellenőrizzük a tartományt
                    throw new ArgumentException("Bad column index.", nameof(x));

                if (y < 0 || y >= gameTable.GetLength(1))
                    throw new ArgumentException("Bad row index.", nameof(y));

                return gameTable[x, y];
            }
        }


        /// <summary>
        /// Model constructor
        /// </summary>
        /// <param name="size"></param>
        /// <param name="persistence"></param>
        public TronModel(int size, IPersistence persistence)
        {
           
            gameTable = new Player[size, size]; // mátrix létrehozása
            _persistence = persistence;
            LeftWinner = false;
            RightWinner = false;
            NewGame();
            LeftPlayer = new PlayerWithCordinates(gameTable.GetLength(0) / 2, 1, Direction.Right);
            RightPlayer = new PlayerWithCordinates(gameTable.GetLength(0) / 2, gameTable.GetLength(1) - 2, Direction.Left);
            Timer = new System.Timers.Timer();
            Timer.Interval = 600;
            Timer.Elapsed += TimerTick;
            Timer.Start();

        }
        /// <summary>
        /// Loading a new game with a constructor
        /// </summary>
        /// <param name="persistence"></param>
        /// <param name="path"></param>
        public TronModel(IPersistence persistence, string path)
        {
            _persistence = persistence;

            Player[] loadingGame = persistence.Load(path);

            double size = Math.Sqrt(loadingGame.Length - 6);
            int sizeAsInt = Convert.ToInt32(size);
            gameTable = new Player[sizeAsInt, sizeAsInt];

            Direction[] directions = new Direction[2];
            directions[0] = (Direction) loadingGame[^2];
            directions[1] = (Direction) loadingGame[^1];

            LeftPlayer = new PlayerWithCordinates(Convert.ToInt32(loadingGame[^6]), 
                                                  Convert.ToInt32(loadingGame[^5]), 
                                                  directions[0]);
            RightPlayer = new PlayerWithCordinates(Convert.ToInt32(loadingGame[^4]), 
                                                   Convert.ToInt32(loadingGame[^3]), 
                                                   directions[1]);

            SetGameTabelValues(loadingGame);
           
            Timer = new System.Timers.Timer();
            Timer.Interval = 600;
            Timer.Elapsed += TimerTick;
            Timer.Start();
        }

        private void SetGameTabelValues(Player[] loadingGame)
        {
            for (int i = 0; i < gameTable.GetLength(0); i++) // végigmegyünk a mátrix elemein
                for (int j = 0; j < gameTable.GetLength(1); j++)
                {

                    gameTable[i, j] = loadingGame[i * gameTable.GetLength(0) + j];
                }
        }
        /// <summary>
        /// Make a new game board
        /// </summary>
        public void NewGame()
        {
            for (int i = 0; i < gameTable.GetLength(0); i++) // végigmegyünk a mátrix elemein
                for (int j = 0; j < gameTable.GetLength(1); j++)
                {
                    gameTable[i, j] = Player.NoOne; // a játékosok pozícióit töröljük
                }

            //Játékosok kezdeti beállítása
            gameTable[gameTable.GetLength(0) / 2, 1] = Player.LeftPlayer;
            gameTable[gameTable.GetLength(0) / 2, gameTable.GetLength(1) - 2] = Player.RightPlayer;
        }

        /// <summary>
        /// Step with the players
        /// </summary>
        /// <param name="x1"></param>
        /// <param name="y1"></param>
        /// <param name="x2"></param>
        /// <param name="y2"></param>
        public void StepGame(int x1, int y1, int x2, int y2)
        {
            CheckGame(x1, y1, x2, y2);
            if (!LeftWinner && !RightWinner && Timer.Enabled)
            {
                gameTable[x1, y1] = Player.LeftPlayer; // pozíció rögzítése
                LeftPlayer.X = x1;
                LeftPlayer.Y = y1;
                gameTable[x2, y2] = Player.RightPlayer; // pozíció rögzítése
                RightPlayer.X = x2;
                RightPlayer.Y = y2;
            }

        }
        /// <summary>
        /// Check if someone has won
        /// </summary>
        /// <param name="x1"></param>
        /// <param name="y1"></param>
        /// <param name="x2"></param>
        /// <param name="y2"></param>
        public void CheckGame(int x1, int y1, int x2, int y2)
        {
            RightWinner = x1 == -1
                                || y1 == -1
                                || x1 == gameTable.GetLength(0)
                                || y1 == gameTable.GetLength(1)
                                || gameTable[x1, y1] != Player.NoOne;

           LeftWinner = x2 == -1
                                || y2 == -1
                                || x2 == gameTable.GetLength(0)
                                || y2 == gameTable.GetLength(1)
                                || gameTable[x2, y2] != Player.NoOne;
            if (RightWinner && !LeftWinner)
                GameOverEvent(Player.RightPlayer);
            else if (!RightWinner && LeftWinner)
                GameOverEvent(Player.LeftPlayer);
            else if(RightWinner && LeftWinner)
                GameOverEvent(Player.NoOne);
 
        }
        
        /// <summary>
        /// Event if someone has won
        /// </summary>
        /// <param name="player"></param>
        public void GameOverEvent(Player player)
        {
            if (GameOver != null)
            {
                Timer.Stop();
                GameOver?.Invoke(this, new GameOverEventArgs(player));
            }
               

        }

        /// <summary>
        /// Save the game board
        /// </summary>
        /// <param name="path"></param>
        public void SaveGame(string path)
        {
            // az értékeket kimásoljuk egy új tömbbe
            Player[] values = CreatePlayerValues();

            //Pozíciók és irányok mentése
            int[] playerCoordinates = new int[4];
            playerCoordinates[0] = LeftPlayer.X;
            playerCoordinates[1] = LeftPlayer.Y;
            playerCoordinates[2] = RightPlayer.X;
            playerCoordinates[3] = RightPlayer.Y;

            Direction[] playerDirections = new Direction[2];
            playerDirections[0] = LeftPlayer.Direction;
            playerDirections[1] = RightPlayer.Direction;

            // végrehajtjuk a mentést
            _persistence.Save(path, values, playerCoordinates, playerDirections);
        }

        private Player[] CreatePlayerValues()
        {
            Player[] values = new Player[gameTable.Length];
            for (int i = 0; i < gameTable.GetLength(0); i++)
                for (int j = 0; j < gameTable.GetLength(1); j++)
                {

                    values[i * gameTable.GetLength(0) + j] = gameTable[i, j];
                }
            return values;
        }
        /// <summary>
        /// Set the new cordinates to step
        /// </summary>
        /// <param name="directionLeftPlayer"></param>
        /// <param name="directionRightPlayer"></param>
        public void SetDirection(Direction directionLeftPlayer, Direction directionRightPlayer)
        {
            int leftStepX = LeftPlayer.X;
            int leftStepY = LeftPlayer.Y;
            if (directionLeftPlayer == Direction.Left)
                leftStepY -= 1;
            else if (directionLeftPlayer == Direction.Up)
                leftStepX -= 1;
            else if (directionLeftPlayer == Direction.Right)
                leftStepY += 1;
            else if (directionLeftPlayer == Direction.Down)
                leftStepX += 1;

            int rightStepX = RightPlayer.X;
            int rightStepY = RightPlayer.Y;
            if (directionRightPlayer == Direction.Left)
                rightStepY -= 1;
            else if (directionRightPlayer == Direction.Up)
                rightStepX -= 1;
            else if (directionRightPlayer == Direction.Right)
                rightStepY += 1;
            else if (directionRightPlayer == Direction.Down)
                rightStepX += 1;

            StepGame(leftStepX, leftStepY, rightStepX, rightStepY);


        }

        private void TimerTick(object? sender, EventArgs e)
        {
           SetDirection(LeftPlayer.Direction, RightPlayer.Direction);
           if(Timer.Enabled)
                OnTableRefresh();
        }

        private void OnTableRefresh()
        {
              TableRefresh?.Invoke(this, EventArgs.Empty);       
        }
        


    }
}
