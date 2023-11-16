using Tron_Model.Model;
using Tron_Model.Persistence;
using Moq;
namespace Test
{
    [TestClass]
    public class UnitTest1
    {

        private Mock<IPersistence> _mock = null!; // az adatelérés mock-ja

        private TronModel _model = null!;

        [TestInitialize]
        public void Initialize() // teszt inicializálása
        {
            _mock = new Mock<IPersistence>();
        }

        [TestMethod]
        public void TronModelConstructorTest12() // egységteszt mûvelet
        {
            _model = new TronModel(12, _mock.Object);
            Assert.AreEqual(12, _model.TableSize);
            Assert.AreEqual(Player.LeftPlayer, _model[6, 1]);
            Assert.AreEqual(Player.RightPlayer, _model[6, 10]);
            Assert.AreEqual(Player.NoOne, _model[0, 0]);
            Assert.AreEqual(Player.NoOne, _model[10, 10]);
        }

        [TestMethod]
        public void TronModelConstructorTest24() 
        {
            _model = new TronModel(24, _mock.Object);
            Assert.AreEqual(24, _model.TableSize);
            Assert.AreEqual(Player.LeftPlayer, _model[12, 1]);
            Assert.AreEqual(Player.RightPlayer, _model[12, 22]);
            Assert.AreEqual(Player.NoOne, _model[0, 0]);
            Assert.AreEqual(Player.NoOne, _model[23, 23]);

        }

        [TestMethod]
        public void TronModelConstructorTest36() 
        {
           
            _model = new TronModel(36, _mock.Object);

            
            Assert.AreEqual(36, _model.TableSize);
            Assert.AreEqual(Player.LeftPlayer, _model[18, 1]);
            Assert.AreEqual(Player.RightPlayer, _model[18, 34]);
            Assert.AreEqual(Player.NoOne, _model[0, 0]);
            Assert.AreEqual(Player.NoOne, _model[35, 35]);
        }

        [TestMethod]
        public void CheckGameTest()
        {
            TronModel _model=new TronModel(12, _mock.Object);
            _model.CheckGame(0,3,4,3);
            Assert.AreEqual(false, _model.RightWinner);
            Assert.AreEqual(false, _model.LeftWinner);

            _model.CheckGame(-1, 3,11,3);
            Assert.AreEqual(true, _model.RightWinner);
            Assert.AreEqual(false, _model.LeftWinner);

            _model.CheckGame(3,4,6,1);
            Assert.AreEqual(false, _model.RightWinner);
            Assert.AreEqual(true, _model.LeftWinner);

            _model.CheckGame(6, 1, 6, 1);
            Assert.AreEqual(true, _model.RightWinner);
            Assert.AreEqual(true, _model.LeftWinner);


        }


        [TestMethod]
        public void StepLeftTest()
        {
            TronModel _model = new TronModel(12, _mock.Object); 
            Assert.AreEqual(false, _model[6, 0] == Player.LeftPlayer);
            _model.StepGame(6,0,6,9); // Balra lép
            Assert.AreEqual(true, _model[6, 0] == Player.LeftPlayer);
            Assert.AreEqual(true, _model[6, 9] == Player.RightPlayer);
            
        }

        [TestMethod]
        public void StepUpTest()
        {
            TronModel _model = new TronModel(12, _mock.Object);
            _model.StepGame(5, 1, 5, 10); //Fel lép
            Assert.AreEqual(true, _model[5, 1] == Player.LeftPlayer);
            Assert.AreEqual(true, _model[5, 10] == Player.RightPlayer);
        }

        [TestMethod]
        public void StepRightTest()
        {
            TronModel _model = new TronModel(12, _mock.Object);
            _model.StepGame(6, 2, 6, 11); //Jobbra lép
            Assert.AreEqual(true, _model[6, 2] == Player.LeftPlayer);
            Assert.AreEqual(true, _model[6, 11] == Player.RightPlayer);
        }

        [TestMethod]
        public void StepDownTest()
        {
            TronModel _model = new TronModel(12, _mock.Object);
            _model.StepGame(7, 1, 7, 10); //Lefele lép
            Assert.AreEqual(true, _model[7, 1] == Player.LeftPlayer);
            Assert.AreEqual(true, _model[7, 10] == Player.RightPlayer);
        }


        [TestMethod]
        public void TestInputString()
        {
            Player[] _load = new Player[576];
            _load[289] = Player.LeftPlayer;
            _load[290] = Player.LeftPlayer;
            _load[291] = Player.LeftPlayer;
            _load[292] = Player.LeftPlayer;
            _load[268] = Player.LeftPlayer;
            _mock.Setup(mock => mock.Load(It.IsAny<String>())).Returns(_load);
            TronModel _model = new TronModel(_mock.Object,_mock.Name);
           
            Assert.AreEqual(Player.LeftPlayer, _model[12, 1]);
            Assert.AreEqual(Player.LeftPlayer, _model[12, 2]);
            Assert.AreEqual(Player.LeftPlayer, _model[12, 3]);
            Assert.AreEqual(Player.LeftPlayer, _model[12, 4]);
            Assert.AreEqual(Player.LeftPlayer, _model[11, 4]);
            Assert.AreEqual(Player.NoOne, _model[6, 3]);
                   
            
        }

        [TestMethod]
        public void EndGameLeftHitTheRightTest() 
        {
            _model = new TronModel(12, _mock.Object);
            _model.StepGame(6, 2,6,9);
            Assert.AreEqual(_model.RightWinner, false);
            _model.StepGame(6,3,6,8);
            Assert.AreEqual(_model.RightWinner, false);
            _model.StepGame(6,4,6,7);
            Assert.AreEqual(_model.RightWinner, false);
            _model.StepGame(6,5,6,6);
            Assert.AreEqual(_model.RightWinner, false);
            _model.StepGame(6,6,5,6);
            Assert.AreEqual(_model.RightWinner, true);
            Assert.AreEqual(_model.LeftWinner, false);

        }
        [TestMethod]
        public void EndGameRightHitTheLeftTest() 
        {
            _model = new TronModel(12, _mock.Object);
            _model.StepGame(6,2,6,9);
            Assert.AreEqual(_model.LeftWinner, false);
            _model.StepGame(6,3,6,8);
            Assert.AreEqual(_model.LeftWinner, false);
            _model.StepGame(6,4,6,7);
            Assert.AreEqual(_model.LeftWinner, false);
            _model.StepGame(6,5,6,6);
            Assert.AreEqual(_model.LeftWinner, false);
            _model.StepGame(7,5,6,5);
            Assert.AreEqual(_model.LeftWinner, true);
            Assert.AreEqual(_model.RightWinner, false);

        }
        [TestMethod]
        public void EndGameLeftHitTheWallTest() 
        {
            _model = new TronModel(12, _mock.Object);
            _model.StepGame(7, 1, 6, 9);
            _model.StepGame(8, 1, 6, 8);
            _model.StepGame(9, 1, 6, 7);
            _model.StepGame(10, 1, 6, 6);
            _model.StepGame(11, 1, 5, 6);
            _model.StepGame(12, 1, 4, 6);

            Assert.AreEqual(_model.RightWinner, true);
            Assert.AreEqual(_model.LeftWinner, false);

        }
        [TestMethod]
        public void EndGameRightHitTheWallTest()
        {
            _model = new TronModel(12, _mock.Object);
            _model.StepGame(6, 2, 5, 10);
            _model.StepGame(6, 3, 4, 10);
            _model.StepGame(6, 4, 3, 10);
            _model.StepGame(6, 5, 2, 10);
            _model.StepGame(6, 6, 1, 10);
            _model.StepGame(6, 7, 0, 10);
            _model.StepGame(6, 8, -1, 10);

            Assert.AreEqual(_model.RightWinner, false);
            Assert.AreEqual(_model.LeftWinner, true);

        }

        [TestMethod]
        public void EndGameTheyHitEachOtherTest()
        {
            _model = new TronModel(12, _mock.Object);
            _model.StepGame(6, 2, 6, 9);
            _model.StepGame(6, 3, 6, 8);
            _model.StepGame(6, 4, 6, 7);
            _model.StepGame(6, 5, 6, 6);
            _model.StepGame(6, 6, 6, 5);
            
            Assert.AreEqual(_model.RightWinner, true);
            Assert.AreEqual(_model.LeftWinner, true);
        }
        }
    }