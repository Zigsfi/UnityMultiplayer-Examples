#pragma strict
public var players : Player[] = new Player[0];
private var shouldAdvance = true;
function Start () {

}

function Update () {

    if(Input.GetButton("Fire1") && shouldAdvance){
        AdvancePlayer(players[0], 5);
        shouldAdvance = false;
    } 
    if (!Input.GetButton("Fire1"))
        shouldAdvance = true;

}
function AdvancePlayer(player : Player, spaces : int) {
    for (var i = 0; i < spaces;){
        if(player.StartAdvance())
            i++;
        yield;
    }
}
