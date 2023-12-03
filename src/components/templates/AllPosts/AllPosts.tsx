import useStyles from './styles.ts';
import useMount from "../../../hooks/useMount.ts";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getGeneralState} from "../../../store/slices/generalSlice/slice.ts";
import {Button} from "../../atoms/Button";
import {ButtonImportanceTypes, ButtonSizeTypes} from "../../atoms/Button/types.ts";
import {getPostList} from "../../../store/actions/generalActions.ts";

function AllPosts() {
    const styles = useStyles();
    const dispatch = useDispatch<any>();
    const limit = 5;

    const {postList} = useSelector(getGeneralState);

    const [offset, setOffset] = useState<number>(0);

    const handleNext = () => {
        setOffset(prev => prev + limit)
    }

    const handlePrevious = () => {
        setOffset(prev => prev < limit ? prev - limit : 0)
    }

    useMount(() => {
        dispatch(getPostList({limit, offset}));
    });


    return (
        <div className={styles.root}>
            <div style={{display:'flex',width:'200px', margin:'10px', gap:'10px'}}>
                <Button
                    importance={ButtonImportanceTypes.Primary}
                    debounceInterval={1000}
                    size={ButtonSizeTypes.Large}
                    disabled={postList.count <= offset}
                    onClick={handlePrevious}
                >
                    Previous
                </Button>
                <Button
                    importance={ButtonImportanceTypes.Primary}
                    debounceInterval={1000}
                    size={ButtonSizeTypes.Large}
                    disabled={offset === 0}
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>

            <div>
                {postList.count
                    ? postList.results.map(post => (
                        <div key={post.id}>
                            post id : {post.id}
                            post title : {post.title}
                        </div>
                    ))
                    :
                    <div>
                        Please create your post.
                    </div>
                }
            </div>
        </div>
    );
}

export default AllPosts;
