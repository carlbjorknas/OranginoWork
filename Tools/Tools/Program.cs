using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace Tools
{
    class Program
    {
        static void Main(string[] args)
        {
            var cards = ReadBehaviorCards();
            FlagIntroCards(cards);
            Save(cards);
        }

        private static BehaviorCard[] ReadBehaviorCards()
        {
            var filecontent = File.ReadAllText("beteenden.json", Encoding.UTF8);
            return JsonConvert.DeserializeObject<BehaviorCard[]>(filecontent);
        }

        private static void FlagIntroCards(BehaviorCard[] cards)
        {
            var introCardIds = new List<int>
            {
                5,8,11,24,38,39,41,46,47,49,50,51,55,62,70,80,87,88,89,91,92,93,97,98,
                103,109,115,120,121,125,126,129,131,140,143,157,159,160,161,162,167,174,
                175,177,178,183,194,199,203,206
            };

            introCardIds.ForEach(id => cards.First(card => card.Id == id).InCollectionOfIntroCards = true);
        }

        private static void Save(BehaviorCard[] cards)
        {
            var json = JsonConvert.SerializeObject(cards, Formatting.Indented);
            File.WriteAllText("beteenden.json", json);
        }
    }
}
