namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const New_civilian = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.New_civilian, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    info.changeScoreBy(1)
})
/**
 * ADD AUDIO EFFECTS
 * 
 * ADD ANIMATION
 */
function Change_Level (Level_Number: number) {
    if (Level_Number == 1) {
        let INTROCHAR: Sprite = null
        sprites.destroy(INTROCHAR)
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(10, 100)
        mySprite.setScale(2, ScaleAnchor.Middle)
        controller.moveSprite(mySprite, 65, 0)
        scene.cameraFollowSprite(mySprite)
        mySprite.ay = 300
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            Civilian = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.New_civilian)
            tiles.placeOnTile(Civilian, value)
            tiles.setTileAt(value, assets.tile`myTile0`)
        }
        game.showLongText("LEVEL 1", DialogLayout.Center)
        game.showLongText("Press \"Up\" \"Left\" and \"Right\" to move.", DialogLayout.Top)
        game.showLongText("Find and collect 10 civilians (touch the pink guys) to complete the level.", DialogLayout.Top)
        info.setScore(0)
        info.startCountdown(60)
        info.setLife(3)
    } else if (Level_Number == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.New_civilian)
        Current_Level = 2
        tiles.setCurrentTilemap(tilemap`level5`)
        mySprite.setPosition(12, 100)
        controller.moveSprite(mySprite, 65, 0)
        scene.cameraFollowSprite(mySprite)
        game.showLongText("LEVEL 2", DialogLayout.Center)
        game.showLongText("Find and collect 10 MORE civilians (touch the pink guys) to complete the level.", DialogLayout.Top)
        game.showLongText("Be wary. 'Objects' are approaching. Press \"A\" to shoot projectiles at them", DialogLayout.Top)
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            Civilian = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.New_civilian)
            tiles.placeOnTile(Civilian, value)
            tiles.setTileAt(value, assets.tile`myTile0`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            Object2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(Object2, value)
            tiles.setTileAt(value, assets.tile`myTile0`)
            Object2.ay = 300
            for (let index = 0; index < 15; index++) {
                PROJECT = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Object2, 50, 0)
                pause(2000)
                PROJECT = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Object2, -50, 0)
                pause(2000)
            }
        }
        ObjCreate = true
        info.startCountdown(60)
        info.setLife(3)
    } else if (Level_Number == 3) {
        Current_Level = 3
    }
}
let ObjCreate = false
let PROJECT: Sprite = null
let Object2: Sprite = null
let Current_Level = 0
let Civilian: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    55555555555999999999999999999999999999999999999999
    55555555555999999999999999999999999999999999999999
    5555f555559999999999999999999999999999999999999999
    5555555f559999999999999999999999999999999999999999
    55f555ff599999999999999999999999999999999999999999
    55555ff5599991119199999999999991999999999999999999
    5555ff55999911999191999911999991119999999999999999
    555ff559999919991191111991991991911999999999999999
    55ff5599999911119991911991911991911999999999999999
    55555599999999999991119991111991119999999999999999
    55555999999999999999999999999991199999999999999999
    55599999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999911999999999999999999999999999
    99999999999111999999911999999999999999999999999999
    99999999991199991991191991999199111999999999999999
    99999999991111991991111991111199199199999999999999
    99999999999999991999999999999199191199999999999999
    99999999999999991999999999999999111999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999977777777777777779999999
    99999999999999999999999777777777777777777777999999
    99999999999999977777777777777777777777777777779999
    99999977777777777777777777777777777777777777777999
    9977777777777777777777777777777f777777777777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777f777777
    777777f7777f777777f7777777f777777777f7777777777777
    7777777777777777777f777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777ff77777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    7777777777777777777f777777777777777777777777777777
    7777777f77777777777777777777777777777777f777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777
    `)
forever(function () {
    if (info.countdown() == 0) {
        game.gameOver(false)
    }
    if (Civilian.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass3)) {
        Civilian.y += 12
    }
    if (Civilian.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass2)) {
        Civilian.y += 12
    }
    if (Civilian.tileKindAt(TileDirection.Center, sprites.castle.tileDarkGrass1)) {
        Civilian.y += 12
    }
})
