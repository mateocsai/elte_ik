using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tron_Model.Model;

namespace Tron_Model.Persistence
{
    public class BinaryFilePersistence : IPersistence
    {
        /// <summary>
        /// Load the game by byte
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        /// <exception cref="FileManagerExeption"></exception>
        public Player[] Load(String path)
        {
            if (path == null)
                throw new FileManagerExeption(nameof(path));

            try
            {
                Byte[] fileData = File.ReadAllBytes(path); // fájl bináris tartalmának beolvasása

                // konvertálás és tömbbé alakítás
                return fileData.Select(fileByte => (Player)fileByte).ToArray();
            }
            catch // ha bármi hiba történt
            {
                throw new FileManagerExeption("Error occurred during reading.");
            }
        }
        /// <summary>
        /// Save the game by byte
        /// </summary>
        /// <param name="path"></param>
        /// <param name="values"></param>
        /// <param name="x"></param>
        /// <param name="y"></param>
        /// <exception cref="FileManagerExeption"></exception>
        public void Save(String path, Player[] values, int[] x, Direction[] y)
        {
            if (path == null)
                throw new FileManagerExeption(nameof(path));
            if (values == null)
                throw new FileManagerExeption(nameof(values));



            try
            {
                List<Byte> byteList = new List<byte>();
                foreach (Player player in values)
                {
                    byteList.Add((Byte)player);
                }
                foreach (int a in x)
                {
                    byteList.Add((Byte)a);
                }
                foreach (Direction b in y)
                {
                    byteList.Add((Byte)b);
                }



                // az értékeket egy byte tömbbe konvertáljuk
                Byte[] fileData = byteList.ToArray();

                // kiírjuk a tartalmat a megadott fájlba
                File.WriteAllBytes(path, fileData);
            }
            catch // ha bármi hiba történt
            {
                throw new FileManagerExeption("Error occurred during writing.");
            }
        }
    }
}
