
public class BoardSpace extends UnityEngine.MonoBehaviour {
    public var nextSpaces : BoardSpace[] = new BoardSpace[0]; 
    function Start () {

    }

    function Update () {

    }

    function addNext(space : BoardSpace) {
        var nextSpacesArray = new Array(nextSpaces);
        nextSpacesArray.Add(space);
        nextSpaces = nextSpacesArray.ToBuiltin(BoardSpace);
    }
    function land(player : Player) {

    }
}
